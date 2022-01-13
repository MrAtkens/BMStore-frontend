import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true

//We pass jwt token by parameter because this function used only in getServerSideProps and another libraries don't work
const getAuthorizeOrders = async (jwtToken) => {
  return await axios.get(`${BackendUrl}/orders`,
      {headers:
        { Authorization: `Bearer ${jwtToken}` }}).then(response => {
    return response
  }).catch(error => {
    return error.response
  })
}


export const ordersApiService = {
    getAuthorizeOrders,
};
