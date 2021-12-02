import {makeAutoObservable} from "mobx";
import Router from 'next/router';
import Cookies from 'js-cookie'

import {
    authorizationStatusValidation,
    registrationStatusValidation,
    userEditStatus,
    userGetDataStatus
} from 'helper/responseStatus'
import { authenticationService, userApiService } from "data/API"
import { USER_FIRST_PART, USER_SECOND_PART, USER_THIRD_PART } from 'constant/storageNames';
import { IUser } from 'domain/interfaces/IUser';

interface IUserStore{
    isAuthenticated: boolean,
    isSubmitting: boolean,
    user: IUser
}

class UserStore implements IUserStore{
    isAuthenticated = false
    isSubmitting = false
    user = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
    }

    constructor() {
        makeAutoObservable(this)
    }

    async authenticate(email: string, password: string){
        const response = await authenticationService.userSingInApi(email, password);
        console.log(response)
        authorizationStatusValidation(response.status)
        if(response.status === 200){
            const split = response.data.split('.');
            console.log(split)
            Cookies.set(USER_FIRST_PART, split[0], {expires: 7})
            Cookies.set(USER_SECOND_PART, split[1], {expires: 7})
            Cookies.set(USER_THIRD_PART, split[2], {expires: 7})

            await this.getUserData()
            this.isSubmitting = false;
            await Router.push("/")
        }
        else{
            this.isSubmitting = false
        }

    }

    async registration(user : IUser, password : string){
        const response = await authenticationService.userSingUpApi(user.firstName, user.lastName, user.email, password);
        console.log(response)
        registrationStatusValidation(response.status)
        if(response.status === 200){
            await Router.push("/account/login")
        }
        else{
            this.isSubmitting = false
            return false;
        }
    }

    async getUserData(){
        const response = await userApiService.getUserApi();
        console.log(response)
        userGetDataStatus(response.status)
        if(response.status === 200) {
            this.setUser(response.data.id, response.data.firstName, response.data.lastName, response.data.email)
            this.setIsAuth(true);
        }
        else{
            Cookies.remove(USER_FIRST_PART)
            Cookies.remove(USER_SECOND_PART)
            Cookies.remove(USER_THIRD_PART)
            this.setIsAuth(false);
        }
    }

    async singOut(){
        Cookies.remove(USER_FIRST_PART)
        Cookies.remove(USER_SECOND_PART)
        Cookies.remove(USER_THIRD_PART)
        this.setIsAuth(false);
        window.location.href = "/"
    }

    // async userEdit(firstName: string, lastName: string, email: string, password: string){
    //     const response = await accountService.userEditApi(firstName, lastName, email, password)
    //     console.log(response)
    //     userEditStatus(response.status)
    //     if(response.status === 200) {
    //         await this.getUserData()
    //     }
    // }

    setId(id: string){
        this.user.id = id
    }

    setIsAuth(auth: boolean){
        this.isAuthenticated = auth
    }

    setUser(id: string, email: string, firstName: string, lastName: string){
        this.user.id = id
        this.user.email = email
        this.user.firstName = firstName
        this.user.lastName = lastName
    }


    get getAuthenticated(){
        return this.isAuthenticated
    }

    get showFirstLastName(){
        console.log(this.user.lastName)
        return this.user.lastName + " " + this.user.firstName
    }

}

export default new UserStore();
