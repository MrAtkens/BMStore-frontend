import axios from 'axios'

import { Filter } from 'domain/interfaces/IFilter';
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true

function getProductsUrl(page?: number, searchText?: string, categoryId?: string, filter?: Array<Filter>, price_min?: number, price_max?: number) : string {
    let shopUrl = BackendUrl + "/products"

    if(page !== undefined){
        shopUrl += `?page=${page}`
    }
    if(searchText !== undefined){
        shopUrl += `?searchText=${searchText}`
    }
    if(categoryId !== undefined){
        shopUrl += `?category=${categoryId}`
    }
    if(filter !== undefined){
        filter.map(filter => {
            shopUrl += `?${filter.slug}=${filter.name}`
        })
    }
    if(price_min !== undefined){
        shopUrl += `?price_min=${price_min}`
    }
    if(price_max !== undefined){
        shopUrl += `?price_max=${price_max}`
    }

    return shopUrl
}


const getProducts = async (page?: number, searchText?: string, category?: string, filter?: Array<Filter>, price_min?: number, price_max?: number) => {
    const url = getProductsUrl(page, searchText, category, filter, price_min, price_max)
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
