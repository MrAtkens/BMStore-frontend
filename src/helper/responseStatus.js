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
	toastBuySuccess,
	toastProductAddToCart,
	toastProductNotFound,
	toastProductRemoveFromCart,
	toastProductAddToWishList,
	toastProductRemoveFromWishList,
	toastProductNotAddToWishList,
	toastUserNotFoundAuth,
	toastMailAcceptError,
	toastAcceptMailSuccess,
	toastPasswordResetMailSuccess,
	toastPasswordResetSuccess,
	toastAuthVerificationError,
	toastPaymentDeliverySuccess,
	toastPhoneOccuped
} from './toastify';

import {
	USER_FIRST_PART,
	USER_SECOND_PART,
	USER_THIRD_PART
} from '../constant/storageNames';

export const authorizationStatusValidation = (status) => {
	if (status === 200) toastAuthorizationSuccess();
	else if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFoundAuth();
	else if (status === 403) toastAuthVerificationError();
	else if (status === 401) toastAuthError();
};

export const registrationStatusValidation = (status) => {
	if (status === 200) toastRegistrationSuccess();
	else if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFound();
	else if (status === 401) toastRegistrationError();
};

export const userGetDataStatus = (status) => {
	if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFound();
	else if (status === 401) leaveFromSystem();
};

export const userEditStatus = (status) => {
	if (status === 200) toastEditSuccess();
	else if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFound();
	else if (status === 401) {
		toastUnauthorizedError();
		leaveFromSystem();
	} else if (status === 400) toastPhoneOccuped();
};

export const userAcceptMailStatus = (status) => {
	if (status === 200) toastAcceptMailSuccess();
	else if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFound();
	else if (status === 401) {
		toastUnauthorizedError();
		leaveFromSystem();
	} else if (status === 400) toastMailAcceptError();
};

export const userResetPasswordMailStatus = (status) => {
	if (status === 200) toastPasswordResetMailSuccess();
	else if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFound();
	else if (status === 401) {
		toastUnauthorizedError();
		leaveFromSystem();
	} else if (status === 400) toastMailAcceptError();
};

export const userResetPasswordStatus = (status) => {
	if (status === 200) toastPasswordResetSuccess();
	else if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFound();
	else if (status === 401) {
		toastUnauthorizedError();
		leaveFromSystem();
	} else if (status === 400) toastMailAcceptError();
};

export const userBuy = (status) => {
	if (status === 200) toastBuySuccess();
	else if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFound();
	else if (status === 401) {
		toastUnauthorizedError();
		leaveFromSystem();
	}
};

export const paymentDelivery = (status) => {
	if (status === 200) toastPaymentDeliverySuccess();
	else if (status === 204) toastPaymentDeliverySuccess();
	else if (status === 500) toastServerError();
	else if (status === 404) toastUserNotFound();
	else if (status === 401) {
		toastUnauthorizedError();
		leaveFromSystem();
	}
};

export const productAddToCart = (status, title) => {
	if (status === 200) toastProductAddToCart(title);
	else if (status === 500) toastServerError();
	else if (status === 404) toastProductNotFound();
};

export const productRemoveFromCart = (status, title) => {
	if (status === 200) toastProductRemoveFromCart(title);
	else if (status === 500) toastServerError();
	else if (status === 404) toastProductNotFound();
};

export const productAddToWishList = (status, title) => {
	if (status === 200) toastProductAddToWishList(title);
	else if (status === 500) toastServerError();
	else if (status === 404) toastProductNotFound();
};

export const productNotAddToWishlist = () => {
	toastProductNotAddToWishList();
};

export const productRemoveFromWishlist = (status, title) => {
	if (status === 200) toastProductRemoveFromWishList(title);
	else if (status === 500) toastServerError();
	else if (status === 404) toastProductNotFound();
};

const leaveFromSystem = () => {
	Cookies.remove(USER_FIRST_PART);
	Cookies.remove(USER_SECOND_PART);
	Cookies.remove(USER_THIRD_PART);
};
