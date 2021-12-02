import axios from 'axios'
import Cookies from 'js-cookie';

import { BackendUrl } from '../settings'
import { USER_FIRST_PART, USER_SECOND_PART, USER_THIRD_PART } from 'constant/storageNames';

axios.defaults.withCredentials = true

const getUserApi = async () => {
  const token = Cookies.get(USER_FIRST_PART) + "." + Cookies.get(USER_SECOND_PART) + "." + Cookies.get(USER_THIRD_PART);
  return await axios.get(`${BackendUrl}/user`,
      {headers:
        { Authorization: `Bearer ${token}` }}).then(response => {
    console.log(response)
    return response
  }).catch(error => {
    return error.response
  })
}


export const userApiService = {
  getUserApi,

};
