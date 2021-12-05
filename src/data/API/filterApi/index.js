import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true


const getFilters = async (language, categoryId) => {
    return await axios.get(`${BackendUrl}/filters?lang=${language}&categoryId=${categoryId}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

export const filtersApiService = {
    getFilters
};
