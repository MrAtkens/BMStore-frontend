import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true


const getUserApi = async (showContactAddress) => {
  return await axios.get(`${BackendUrl}/user?showContactAdresses=${showContactAddress}`, {headers: {

    }}).then(response => {
    console.log(response)
    return response
  }).catch(error => {
    return error.response
  })
}


export const userService = {
  getUserApi,

};
