import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true


const getCart = async (userId) => {
   return await axios.get(`${BackendUrl}/cart?lang=ru&userId=${userId}`).then(response => {
       return response
   }).catch(error => {
       return error.response
   })
}

const addToCart = async (productId, userId, count) => {
    return await axios.post(`${BackendUrl}/cart?lang=ru`, {
        productId: productId,
        userId: userId,
        count: count
    }).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


const addExistProductToCart = async (productId, userId, count) => {
    return await axios.put(`${BackendUrl}/cart?lang=ru`, {
        productId: productId,
        userId: userId,
        count: count
    }).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const removeFromCart = async (productId, userId) => {
    return await axios.delete(`${BackendUrl}/cart?lang=ru`, { data: {
            productId: productId,
            userId: userId,
        }}).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


export const cartApiService = {
    getCart,
    addToCart,
    addExistProductToCart,
    removeFromCart
};
