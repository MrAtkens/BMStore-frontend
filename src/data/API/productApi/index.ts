import axios from 'axios'

import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true

function getProductsUrl(take, skip, searchText, categoryId, filters, price_min, price_max) : string {
    let shopUrl = BackendUrl + "/products?language=ru"

    if(take !== undefined){
        shopUrl += `&take=${take}`
    }
    if(take !== undefined) {
        shopUrl += `&skip=${skip}`
    }
    if(searchText !== undefined){
        shopUrl += `&searchText=${searchText}`
    }
    if(categoryId !== undefined){
        shopUrl += `&category=${categoryId}`
    }
    if(filters !== undefined){
        filters.map(filter => {
            shopUrl += `&filters=${filter}`
        })
    }
    if(price_min !== undefined){
        shopUrl += `&price_min=${price_min}`
    }
    if(price_max !== undefined){
        shopUrl += `&price_max=${price_max}`
    }

    return shopUrl
}


const getProducts = async (take, skip, searchText, category, filter, price_min, price_max) => {
    const url = getProductsUrl(take, skip, searchText, category, filter, price_min, price_max)
    return await axios.get(url).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        return error.response
    })
}



export const productsApiService = {
    getProducts,
};
