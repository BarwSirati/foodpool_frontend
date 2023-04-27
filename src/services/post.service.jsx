import axios from 'axios'
import Cookies from 'js-cookie'

export const getPost = async () => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.get(`/api/post`)
      return res.data
    } catch (error) {}
  }
}
