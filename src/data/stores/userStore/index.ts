import {makeAutoObservable} from "mobx";
import Router from 'next/router';

import {
    authorizationStatusValidation,
    registrationStatusValidation,
    userEditStatus,
    userGetDataStatus
} from 'helper/responseStatus'

class UserStore {
    isAuthenticated = false
    isSubmitting = false
    user = {
        id: "",
        phone: "",
        firstName: "",
        lastName: "",
        email: "",
        code: ""
    }

    constructor() {
        makeAutoObservable(this)
    }

    // async authenticate(phone : string, password: string){
    //     const response = await authenticationService.userSingInApi(phone, password);
    //     console.log(response)
    //     authorizationStatusValidation(response.status)
    //     if(response.status === 200){
    //         localStorage.setItem('jwt_token', response.data);
    //         await this.getUserData()
    //         this.isSubmitting = false;
    //         await Router.push("/")
    //     }
    //     else{
    //         this.isSubmitting = false
    //     }
    //
    // }
    //
    // async registration(firstName, lastName, phoneNumber, email, password){
    //     const response = await authenticationService.userSingUpApi(firstName, lastName, phoneNumber, email, password);
    //     console.log(response)
    //     registrationStatusValidation(response.status)
    //     if(response.status === 200){
    //         await Router.push("/account/login")
    //     }
    //     else{
    //         this.isSubmitting = false
    //         return false;
    //     }
    // }

    async getUserData(){
        // const response = await accountService.userGetData();
        // console.log(response)
        // userGetDataStatus(response.status)
        // if(response.status === 200) {
        //     this.setUser(response.data.id, response.data.phoneNumber, response.data.firstName, response.data.lastName, response.data.email)
        //     this.setIsAuth(true);
        // }
        // else{
        //     localStorage.removeItem('jwt_token');
        //     this.setIsAuth(false);
        // }
    }

    async singOut(){
        localStorage.removeItem('jwt_token');
        this.setIsAuth(false);
        window.location.href = "/"
    }

    async userEdit(firstName: string, lastName: string, email: string, password: string){
        // const response = await accountService.userEditApi(firstName, lastName, email, password)
        // console.log(response)
        // userEditStatus(response.status)
        // if(response.status === 200) {
        //     await this.getUserData()
        // }
    }

    setId(id: string){
        this.user.id = id
    }

    setIsAuth(auth: boolean){
        this.isAuthenticated = auth
    }

    setUser(id: string, phone: string, email: string, firstName: string, lastName: string){
        this.user.id = id
        this.user.phone = phone
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

    get showPhoneNumber(){
        return this.user.phone
    }

}

export default new UserStore();
