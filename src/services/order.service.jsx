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