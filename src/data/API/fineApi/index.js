import axios from 'axios';
import { BackendUrl } from '../settings';

axios.defaults.withCredentials = true;

const getFines = async (jwtToken) => {
	return await axios
		.get(`${BackendUrl}/fines`, {
			headers: { Authorization: `Bearer ${jwtToken}` }
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

export const finesApiService = {
	getFines
};
