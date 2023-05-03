import axios from 'axios'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

export const getOrder = async () => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.get(`/api/order`)
      return res.data
    } catch (error) {}
  }
}

export const getAnonOrderByPostId = async (postId) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.get(`/api/order/post/${postId}/anon`)
      return res.data
    } catch (error) {}
  }
}

export const getOrderByUserId = async (userId) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.get(`/api/order/user/${userId}`)
      return res.data
    } catch (error) {}
  }
}

export const createOrder = async ({ userId, postId, menuName, note }) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.post(`/api/order`, {
        userId,
        postId,
        menuName,
        note,
      })
      if (res.status == 200) {
        Swal.fire('Order Success', 'You clicked the button!', 'success').then(
          (result) => {
            if (result.isConfirmed) {
              document.location = '/'
            }
          }
        )
      }
    } catch (error) {}
  }
}

export const getOrderByPostId = async (postId) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.get(`/api/order/post/${postId}`)
      return res.data
    } catch (error) {}
  }
}

export const updateStatusByPostUser = async (status, orderId) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.put(`/api/order/post/${orderId}`, {
        status: +status,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateStatusByOrderUser = async (status, orderId) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.put(`/api/order/user/${orderId}`, {
        status: +status,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
