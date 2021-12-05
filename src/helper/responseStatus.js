import Router from 'next/router';
import Cookies from 'js-cookie';

import {
    toastServerError,
    toastUnauthorizedError,
    toastAuthError,
    toastUserNotFound,
    toastAuthorizationSuccess,
    toastRegistrationSuccess,
    toastRegistrationError,
    toastEditSuccess,
    toastProductNotFound,
    toastBuySuccess, toastProductAddToWishList, toastProductRemoveFromWishList
} from './toastify'


import {toastProductAddToCompareList} from './toastify';
import { LOGIN } from '../constant/routes';
import { USER_FIRST_PART, USER_SECOND_PART, USER_THIRD_PART } from '../constant/storageNames';


export const authorizationStatusValidation = (status) => {
    if (status === 200)
        toastAuthorizationSuccess()
    else if(status === 500)
        toastServerError()
    else if (status === 404)
        toastUserNotFound()
    else if (status === 401)
        toastAuthError()
}

export const registrationStatusValidation = (status) => {
    if (status === 200)
        toastRegistrationSuccess()
    else if(status === 500)
        toastServerError()
    else if (status === 404)
        toastUserNotFound()
    else if (status === 401)
        toastRegistrationError()
}

export const userGetDataStatus = (status) => {
    if(status === 500)
        toastServerError()
    else if (status === 404)
        toastUserNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        leaveFromSystem()

    }
}

export const userEditStatus = (status) => {
    if(status === 200)
        toastEditSuccess()
    else if(status === 500)
        toastServerError()
    else if (status === 404)
        toastUserNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        leaveFromSystem()
    }
}

export const userBuy = (status) => {
    if(status === 200)
        toastBuySuccess()
    else if(status === 500)
        toastServerError()
    else if (status === 404)
        toastUserNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        leaveFromSystem()

    }
}

export const productGet = (status) => {
    if(status === 500)
        toastServerError()
    else if (status === 404)
        toastProductNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        leaveFromSystem()

    }
}

export const productAddToWishList = (status, title) => {
    if(status === 200)
        toastProductAddToWishList(title)
    else if(status === 500)
        toastServerError()
    else if (status === 404)
        toastProductNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        leaveFromSystem()

    }
}

export const productRemoveFromWishList = (status, title) => {
    if(status === 200)
        toastProductRemoveFromWishList(title)
    else if(status === 500)
        toastServerError()
    else if (status === 404)
        toastProductNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        leaveFromSystem()
    }
}



export const productAddToCompareList = (status, title) => {
    if(status === 200)
        toastProductAddToCompareList(title)
    else if(status === 500)
        toastServerError()
    else if (status === 404)
        toastProductNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        leaveFromSystem()

    }
}

export const productRemoveFromCompareList = (status, title) => {
    if(status === 200)
        toastProductRemoveFromWishList(title)
    else if(status === 500)
        toastServerError()
    else if (status === 404)
        toastProductNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        leaveFromSystem()
    }
}


const leaveFromSystem = () => {
    Cookies.remove(USER_FIRST_PART)
    Cookies.remove(USER_SECOND_PART)
    Cookies.remove(USER_THIRD_PART)
    Router.push({LOGIN})
}
