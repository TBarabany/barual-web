import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
})

http.interceptors.response.use(
  response => response.data, 
  error => {
    if (error.response && error.response.status === 401){
      localStorage.clear()
      window.location.assign('/login')
    }
    return Promise.reject(error)
  }
)

const getProperties = () => http.get('/properties')
const getProperty = () => http.get('/properties/:id')



export default {
  getProperties,
  getProperty
  
}