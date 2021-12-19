import axios from 'axios'

import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true

function getProductsUrl(take, skip, searchText, categoryId, filters, price_min, price_max) : string {
    let shopUrl = BackendUrl + "/products?Language=ru"

    if(take !== undefined && !isNaN(take))
        shopUrl += `&Take=${take}`
    if(skip !== undefined && !isNaN(skip))
        shopUrl += `&Skip=${skip}`
    if(searchText !== undefined)
        shopUrl += `&Text=${encodeURIComponent(searchText)}`
    if(categoryId !== undefined)
        shopUrl += `&CategoryId=${categoryId}`
    if(filters !== undefined){
        if (typeof filters === 'string' || filters instanceof String){
            shopUrl += `&Filters=${filters}`
        }
        else{
            filters.map(filter => {
                shopUrl += `&Filters=${filter}`
            })
        }
    }
    if(price_min !== undefined)
        shopUrl += `&PriceMin=${price_min}`
    if(price_max !== undefined)
        shopUrl += `&PriceMax=${price_max}`

    return shopUrl
}


const getProducts = async (take, skip, searchText, category, filter, price_min, price_max) => {
    const url = getProductsUrl(take, skip, searchText, category, filter, price_min, price_max)
    return await axios.get(url).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const getProductById = async (id) => {
    return await axios.get(`${BackendUrl}/products/${id}?lang=ru`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}



export const productsApiService = {
    getProducts,
    getProductById
};
