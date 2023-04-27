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

export const getPostByUserId = async ( userId ) =>{
  const token = Cookies.get('token')
  if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      try {
          const res = await axios.get(`/api/post/user/${userId}`)
          return res.data
      } catch (error) {
          
      }
  }
}