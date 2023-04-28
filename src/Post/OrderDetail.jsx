import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Container from '../components/Container'
import { useAuth } from '../contexts/AuthContext'

import { getOrderByPostId } from '../services/order.service'

const OrderDetail = () => {
    const [isloading, setIsLoading] = useState(false)
    const [orderData, setOrderData] = useState([])
    const { postId } = useParams()

    const { user } = useAuth()

    useEffect(() => {
        const getOrder = async () => {
            setIsLoading(true)
            const res = await getOrderByPostId(postId)
            setOrderData(res)
            setIsLoading(false)
        }

        getOrder()
    }, [])

    console.log(orderData)
    
    return (
        <Container>
            OrderDetail
        </Container>
    )
}

export default OrderDetail