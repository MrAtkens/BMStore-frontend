import Cookies from 'js-cookie';
import { USER_FIRST_PART, USER_SECOND_PART, USER_THIRD_PART } from "constant/storageNames";

export const getUser = () => {
	return Cookies.get(USER_FIRST_PART) + "." + Cookies.get(USER_SECOND_PART) + "." + Cookies.get(USER_THIRD_PART)
}

