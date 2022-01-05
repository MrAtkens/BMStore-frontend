import {makeAutoObservable} from "mobx";
import Router from 'next/router';
import Cookies from 'js-cookie'

import {
    authorizationStatusValidation,
    registrationStatusValidation, userEditStatus,
    userGetDataStatus
} from 'helper/responseStatus';
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
        fullName: "",
        phone: "",
        email: "",
        address: ""
    }

    constructor() {
        makeAutoObservable(this)
    }

    async authenticate(phone: string, password: string){
        const response = await authenticationService.userSingInApi(phone, password);
        console.log(response)
        authorizationStatusValidation(response.status)
        const token = response.data.token
        if(response.status === 200){
            const split = token.split('.');
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

    async registration(fullName: string, phoneNumber: string, email:string, password : string, address: string){
        const response = await authenticationService.userSingUpApi(fullName, phoneNumber, email, password, address);
        console.log(response)
        registrationStatusValidation(response.status)
        if(response.status === 200){
            await Router.push("/account/login")
        }
        else{
            this.isSubmitting = false
        }
    }

    async getUserData(){
        const response = await userApiService.getUserApi();
        console.log(response.data)
        userGetDataStatus(response.status)
        if(response.status === 200) {
            this.setUser(response.data.id, response.data.fullname, response.data.phone, response.data.email, response.data.address)
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

    async userEdit(fullName: string, address: string, phone: string){
        const response = await userApiService.editUserData(fullName, address, phone)
        console.log(response)
        userEditStatus(response.status)
        if(response.status === 200) {
            await this.getUserData()
        }
    }

    setId(id: string){
        this.user.id = id
    }

    setIsAuth(auth: boolean){
        this.isAuthenticated = auth
    }

    setUser(id: string, fullName: string, phone: string, email: string, address: string){
        this.user.id = id
        this.user.email = email
        this.user.fullName = fullName
        this.user.phone = phone
        this.user.email = email
        this.user.address = address
    }


    get getAuthenticated(){
        return this.isAuthenticated
    }

    get showFirstLastName(){
        return this.user.fullName
    }

}

export default new UserStore();
