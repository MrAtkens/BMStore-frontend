import axios from 'axios';
import { BackendUrl } from '../settings';
import { getUser } from '../../../helper/commons/userHelper';

axios.defaults.withCredentials = true;

const getAddresses = async (jwtToken) => {
	return await axios
		.get(`${BackendUrl}/addresses?lang=ru`, {
			headers: { Authorization: `Bearer ${jwtToken}` }
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const refreshAddresses = async () => {
	return await axios
		.get(`${BackendUrl}/addresses?lang=ru`, {
			headers: { Authorization: `Bearer ${getUser()}` }
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const addAddress = async (city, address, additionalInfo) => {
	return await axios
		.post(
			`${BackendUrl}/addresses?lang=ru`,
			{
				city: city,
				address: address,
				additionalInfo: additionalInfo
			},
			{
				headers: { Authorization: `Bearer ${getUser()}` }
			}
		)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const editAddress = async (addressId, city, address, additionalInfo) => {
	return await axios
		.put(
			`${BackendUrl}/addresses/${addressId}?lang=ru`,
			{
				city: city,
				address: address,
				additionalInfo: additionalInfo
			},
			{
				headers: { Authorization: `Bearer ${getUser()}` }
			}
		)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

const removeAddress = async (addressId) => {
	return await axios
		.delete(`${BackendUrl}/addresses/${addressId}?lang=ru`, {
			headers: { Authorization: `Bearer ${getUser()}` }
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

export const addressApiService = {
	getAddresses,
	refreshAddresses,
	addAddress,
	editAddress,
	removeAddress
};
