import axios from 'axios';
import { BackendUrl } from '../settings';

axios.defaults.withCredentials = true;

const userSingInApi = async (phone, password) => {
	return await axios
		.post(`${BackendUrl}/user/identity/SignIn`, {
			phone: phone,
			password: password
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const userSingUpApi = async (fullname, phone, email, password, address) => {
	return await axios
		.post(`${BackendUrl}/user/identity/SignUp`, {
			fullname: fullname,
			phoneNumber: phone,
			email: email,
			password: password,
			address: address
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const userPasswordResetApi = async (email, responseUrl) => {
	return await axios
		.get(`${BackendUrl}/user/identity/PasswordReset`)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const userPostPasswordResetApi = async (password, operationId) => {
	return await axios
		.post(`${BackendUrl}/user/identity/PostPasswordReset`, {
			password: password,
			operationId: operationId
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

export const authenticationService = {
	userSingInApi,
	userSingUpApi,
	userPasswordResetApi,
	userPostPasswordResetApi
};
