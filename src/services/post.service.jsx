import axios from 'axios'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

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

export const getPostById = async (id) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.get(`/api/post/user/${id}`)
      return res.data
    } catch (error) {}
  }
}

export const createPost = async ({
  userId,
  stallId,
  menuName,
  location,
  description,
  typePost,
  limitOrder,
}) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.post(`/api/post`, {
        userId,
        stallId,
        menuName,
        location,
        description,
        typePost,
        limitOrder,
      })
      if (res.status == 200) {
        Swal.fire('Post Success', 'You clicked the button!', 'success')
      }
    } catch (error) {}
  }
}
