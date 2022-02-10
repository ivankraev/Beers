import Axios from 'axios'
const baseUrl = 'https://api.punkapi.com/v2/'
export const axios = Axios.create({ baseURL: baseUrl })