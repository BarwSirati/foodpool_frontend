import axios from "axios";
import Cookies from "js-cookie";
import Swal from 'sweetalert2';

export const fetchPost = async() =>{
    const token = Cookies.get('token')
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try {
            const res = await axios.get(`/api/order`)
            return res.data
        } catch (error) {
            
        }
    }
}

export const getOrderByUserId = async ( userId ) => {
    const token = Cookies.get('token')
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try {
            const res = await axios.get(`/api/order/user/${userId}`)
            return res.data
        } catch (error) {
            
        }
    }
}

export const getOrderByPostId = async ( postId ) => {
    const token = Cookies.get('token')
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try {
            const res = await axios.get(`/api/order/post/${postId}`)
            return res.data
        } catch (error) {
            
        }
    }
}

export const updateStatusByPostUser = async (status, orderId) => {
    const token = Cookies.get('token')
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try {
            // console.log(status)
            // console.log(postId)
            const res = await axios.put(`/api/order/post/${orderId}`, { status: status})
            console.log(res)
            // if (res.status === 200) {
            //     Swal.fire('Close Success', 'You clicked the button!', 'success')
            // }
        } catch (error) {
            console.log(error)
        }
    }
} 