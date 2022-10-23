import axios from "axios";

const API_ROUTES = {
  login: '/login',
  register: '/register',
}

const baseClient = axios.create({
  baseURL: 'http://localhost:3333/api',
})

// http://localhost:3333/api/login
const login = (email: string, password: string) => baseClient.post(API_ROUTES.login, {email, password})

// http://localhost:3333/api/register
const register = (email: string, password: string) => baseClient.post(API_ROUTES.register, {email, password})

export {
  login,
  register,
  baseClient
}
