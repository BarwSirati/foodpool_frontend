import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export const login = async (username, password) => {
  try {
    const res = await axios.post('/api/auth/login', { username, password })
    const token = res.data.token
    return token
  } catch (err) {}
}

export const logout = async () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const navigate = useNavigate()
  removeCookie('token')
  navigate('/login', { replace: true })
}

export const getProfile = async () => {
  const token = cookies.token
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const res = await axios.get(`/api/user/current`)
    return res.data
  }
}
