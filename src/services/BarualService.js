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

//Property
const getProperties = (type) => http.get('/properties', { params: { type } })
const getProperty = (id) => http.get(`/properties/${id}`)

//User
const login = ({ email, password }) => http.post('/login', { email,password })
const logout = () => http.post('/logout')
const register = (data) => http.post('/users', data)

//Message
const sendMessage = (id, data) => http.post(`/messages/${id}`, data)
const getMessages = (type) => http.get('/messages', { params: { type } })


export default {
  getProperties,
  getProperty,
  login,
  logout,
  register,
  sendMessage,
  getMessages
}
