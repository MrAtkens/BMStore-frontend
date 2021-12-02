import axios from 'axios'
import { BackendUrl } from '../settings'

axios.defaults.withCredentials = true


const userSingInApi = async (email, password) => {
  return await axios.post(`${BackendUrl}/user/identity/SignIn`, {
    email: email,
    password: password
  }).then(response => {
    console.log(response)
    return response
  }).catch(error => {
    return error.response
  })
}

const userSingUpApi = async (firstName, lastName, email, password) => {
  return await axios.post(`${BackendUrl}/user/identity/SingUp`, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  }).then(response => {
    console.log(response)
    return response
  }).catch(error => {
    return error.response
  })
}

const userPasswordResetApi = async (email, responseUrl) => {
    return await axios.get(`${BackendUrl}/user/identity/PasswordReset`).then(response => {
    console.log(response)
    return response
  }).catch(error => {
    return error.response
  })
}

const userPostPasswordResetApi = async (password, operationId) => {
  return await axios.post(`${BackendUrl}/user/identity/PostPasswordReset`, {
    password: password,
    operationId: operationId
  }).then(response => {
    console.log(response)
    return response
  }).catch(error => {
    return error.response
  })
}

export const authenticationService = {
  userSingInApi,
  userSingUpApi,
  userPasswordResetApi,
  userPostPasswordResetApi
};
