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

export const getPostByUserId = async ( userId ) => {
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

export const updateByPostUser = async ( postStatus, postId ) => {
  const token = Cookies.get('token')
  if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      try {
          console.log(postStatus)
          console.log(postId)
          const res = await axios.put(`/api/post/${postId}`, { PostStatus: postStatus})
          if (res.status === 200) {
            Swal.fire('Close Success', 'You clicked the button!', 'success')
            return true
          } else {
            return false
          }
      } catch (error) {
          return false
      }
  }
}