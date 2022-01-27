import {makeAutoObservable} from "mobx";
import Router from 'next/router';
import Cookies from 'js-cookie'

import {
    authorizationStatusValidation,
    registrationStatusValidation, userEditStatus,
    userGetDataStatus
} from 'helper/responseStatus';
import { authenticationService, userApiService } from "data/API"
import { USER_FIRST_PART, USER_ID, USER_SECOND_PART, USER_THIRD_PART } from 'constant/storageNames';
import { IUser } from 'domain/interfaces/IUser';
import { getUserId } from 'helper/stores/userHelper';

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
        authorizationStatusValidation(response.status)
        const token = response.data.token
        if(response.status === 200){
            const split = token.split('.');
            console.log(split)
            Cookies.set(USER_FIRST_PART, split[0], {expires: 7})
            Cookies.set(USER_SECOND_PART, split[1], {expires: 7})
            Cookies.set(USER_THIRD_PART, split[2], {expires: 7})
            await userApiService.mergeUser(getUserId()).then(async () => {
                await this.getUserData()
            })
            this.isSubmitting = false;
            await Router.push("/")
        }
        else
            this.isSubmitting = false
    }

    async registration(fullName: string, phoneNumber: string, email:string, password : string, address: string){
        console.log(address)
        const response = await authenticationService.userSingUpApi(fullName, phoneNumber, email, password, address);
        console.log(response)
        registrationStatusValidation(response.status)
        if(response.status === 200)
            await Router.push("/account/login")
        else
            this.isSubmitting = false
    }

    async getUserData(){
        const response = await userApiService.getUserApi();
        userGetDataStatus(response.status)
        if(response.status === 200) {
            this.setUser(response.data.id, response.data.fullname, response.data.phone, response.data.email, response.data.address)
            this.setIsAuth(true);
            localStorage.setItem(USER_ID, JSON.stringify(response.data.id));
        }
    }

    async singOut(){
        Cookies.remove(USER_FIRST_PART)
        Cookies.remove(USER_SECOND_PART)
        Cookies.remove(USER_THIRD_PART)
        this.setIsAuth(false);
        localStorage.removeItem(USER_ID)
        window.location.href = "/"
    }

    async userEdit(fullName: string, address: string, phone: string){
        const response = await userApiService.editUserData(fullName, address, phone)
        userEditStatus(response.status)
        if(response.status === 200)
            await this.getUserData()
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

    get getAddress(){
        return this.user.address
    }

}

export default new UserStore();
