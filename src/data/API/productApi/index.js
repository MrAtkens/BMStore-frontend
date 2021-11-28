import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true


const getProducts = async (language, currencyId, cityId, takeCount, skipCount, priceMin, priceMax,
                           isShowSeo, isShowImage, isShowPrice, isShowFilters, isShowAttributes) => {
    return await axios.get(`${BackendUrl}/products?Language=${language}&Currency=${currencyId}
    &City=${cityId}&Take=${takeCount}&Skip=${skipCount}&PriceMin=${priceMin}&PriceMax=${priceMax}
    &ShowSeo=${isShowSeo}&ShowImages=${isShowImage}&ShowPrices=${isShowPrice}
    &ShowFilters=${isShowFilters}&ShowAttributes=${isShowAttributes}`).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        return error.response
    })
}



const getProductById = async (id, language, currencyId, cityId, takeCount, skipCount, priceMin, priceMax, isShowSeo, isShowImage, isShowPrice) => {
    return await axios.get(`${BackendUrl}/products/${id}?Language=${language}&Currency=${currencyId}&City=${cityId}&Take=${takeCount}&Skip=${skipCount}
    &PriceMin=${priceMin}&PriceMax=${priceMax}&ShowSeo=${isShowSeo}&ShowImages=${isShowImage}&ShowPrices=${isShowPrice}`).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        return error.response
    })
}


export const productsApiService = {
    getProducts,
    getProductById,
};
