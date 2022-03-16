import axios from 'axios';
import { BackendUrl } from '../settings';

axios.defaults.withCredentials = true;

const getAuctionBanner = async () => {
	return await axios
		.get(`${BackendUrl}/auction-banner`)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});
};

export const auctionBannerApiService = {
	getAuctionBanner
};
