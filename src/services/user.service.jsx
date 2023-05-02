import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'


export const login = async (username, password) => {
  try {
    const res = await axios.post('/api/auth/login', { username, password })
    const token = res.data.token
    if (token) {
      const resolveAfter3Sec = new Promise((resolve) =>
        setTimeout(resolve, 1000)
      )
      toast
        .promise(
          resolveAfter3Sec,
          {
            pending: 'Loading',
            success: 'Success',
            error: 'Error',
          },
          { position: toast.POSITION.TOP_CENTER }
        )
        .then(() => {
          setTimeout(() => {
            Cookies.set('token', token)
            window.location = '/'
          }, 1000)
        })
    }
  } catch (err) {
    toast.error('Invalid Credential', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
}

export const registerUser = async ({
  name,
  lastname,
  username,
  password,
  tel,
  line,
}) => {
  try {
    const res = await axios.post('/api/auth/register', {
      name,
      lastname,
      username,
      password,
      tel,
      line,
    })
    if (res.status === 200) {
      const resolveAfter3Sec = new Promise((resolve) =>
        setTimeout(resolve, 1000)
      )
      toast
        .promise(
          resolveAfter3Sec,
          {
            pending: 'Loading',
            success: 'Success',
            error: 'Error',
          },
          { position: toast.POSITION.TOP_CENTER }
        )
        .then(() => {
          setTimeout(() => {
            window.location = '/login'
          }, 1000)
        })
    }
  } catch (err) {
    toast.error("Can't Register", {
      position: toast.POSITION.TOP_CENTER,
    })
  }
}

export const logout = async () => {
  Cookies.remove('token')
  document.location = '/login'
}

export const getProfile = async () => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.get(`/api/user/current`)
      return res.data
    } catch (err) {
      logout()
    }
  }
}

export const updateProfile = async (
  id,
  { name, lastname, username, password, tel, line }
) => {
  const token = Cookies.get('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.put(`/api/user/${id}`, {
        name,
        lastname,
        username,
        password,
        tel,
        line,
      })

      if (res.status == 200) {
        const resolveAfter3Sec = new Promise((resolve) =>
          setTimeout(resolve, 1000)
        )
        toast
          .promise(
            resolveAfter3Sec,
            {
              pending: 'Loading',
              success: 'Success',
              error: 'Error',
            },
            { position: toast.POSITION.TOP_CENTER }
          )
          .then(() => {
            setTimeout(() => {
              window.location = '/profile'
            }, 1000)
          })
      }
    } catch (err) {
      console.log(err)
    }
  }
}
