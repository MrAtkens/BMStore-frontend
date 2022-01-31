import axios from 'axios'

import { getUser } from 'helper/commons/userHelper';
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true

const getUserApi = async () => {
  return await axios.get(`${BackendUrl}/user`,
      {headers:
        { Authorization: `Bearer ${getUser()}` }}).then(response => {

        return response
  }).catch(error => {
    return error.response
  })
}

const mergeUser = async (id) => {
    return await axios.post(`${BackendUrl}/user/merge?anonymousUserId=${id}`, {},
        {headers: { Authorization: `Bearer ${getUser()}` }}).then(response => {
            console.log(response)
            return response
    }).catch(error => {
        return error.response
    })
}

const editUserData = async (fullName, address, phone) => {
  return await axios.put(`${BackendUrl}/user`,
      {
        fullName: fullName,
        address: address,
        phone: phone
      }, {headers:
            { Authorization: `Bearer ${getUser()}` }}).then(response => {
    return response
  }).catch(error => {
    return error.response
  })
}


export const userApiService = {
    getUserApi,
    editUserData,
    mergeUser
};
