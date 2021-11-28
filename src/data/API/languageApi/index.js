import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true


const getLanguages = async (language) => {
    return await axios.get(`${BackendUrl}/languages`).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        return error.response
    })
}


const getLanguageById = async (id) => {
    return await axios.get(`${BackendUrl}/languages/${id}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

//Code example: ru, en, kz
const getLanguageByCode = async (code) => {
    return await axios.get(`${BackendUrl}/languages/code/${code}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


export const languageApiService = {
    getLanguages,
    getLanguageById,
    getLanguageByCode
};
