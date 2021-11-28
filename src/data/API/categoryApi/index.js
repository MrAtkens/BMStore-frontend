import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true


const getCategoriesByLanguage = async (language) => {
    return await axios.get(`${BackendUrl}/categories?lang=${language}`).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        return error.response
    })
}


const getCategoryByIdAndLanguage = async (id, language) => {
    return await axios.get(`${BackendUrl}/categories/${id}?lang=${language}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const getCategoryBySlug = async (slug) => {
    return await axios.get(`${BackendUrl}/categories/slug/${slug}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


export const categoryApiService = {
    getCategoriesByLanguage,
    getCategoryByIdAndLanguage,
    getCategoryBySlug
};
