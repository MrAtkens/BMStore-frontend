import axios from 'axios';
import { BackendUrl } from '../settings';

axios.defaults.withCredentials = true;

const getInvoices = async (jwtToken) => {
	return await axios
		.get(`${BackendUrl}/invoice?lang=ru`, {
			headers: { Authorization: `Bearer ${jwtToken}` }
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const createInvoice = async (userId, fullName, email, phone, userAddress) => {
	return await axios
		.post(`${BackendUrl}/invoice?userId=${userId}`, {
			fullname: fullName,
			email: email,
			phone: phone,
			userAddress: userAddress
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const editInvoiceStatus = async (userId, status) => {
	return await axios
		.put(`${BackendUrl}/invoice?userId=${userId}&status=${status}`)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

export const invoiceApiService = {
	getInvoices,
	createInvoice,
	editInvoiceStatus
};
