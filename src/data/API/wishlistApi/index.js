import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true

const getWishList = async (userId) => {
   return await axios.get(`${BackendUrl}/wish-list?lang=ru&userId=${userId}`).then(response => {
       return response
   }).catch(error => {
       return error.response
   })
}

const addToWishList = async (productId, userId) => {
    return await axios.post(`${BackendUrl}/wish-list?lang=ru`, {
        productId: productId,
        userId: userId,
    }).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const removeWishList = async (productId, userId) => {
    return await axios.delete(`${BackendUrl}/wish-list?lang=ru`, { data: {
            productId: productId,
            userId: userId,
        }}).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


export const wishListApiService = {
    getWishList,
    addToWishList,
    removeWishList
};
