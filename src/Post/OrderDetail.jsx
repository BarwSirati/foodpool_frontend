import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Container from '../components/Container'
import { useAuth } from '../contexts/AuthContext'
import OrderCard from './OrderCard'

import { getOrderByPostId } from '../services/order.service'

const OrderDetail = () => {
    const [isloading, setIsLoading] = useState(false)
    const [orderData, setOrderData] = useState([])
    const { postId } = useParams()

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
            <h2 className="text-2xl font-semibold">Post Detail</h2>
            <div className="pt-5 lg:px-32">
                {isloading ? (
                    <h1 className="text-3xl font-semibold">Loading</h1>
                ) : (
                    orderData.map((data) => {
                        return (
                            <OrderCard 
                                key = {data.id}
                                menu = {data.menuName}
                                postInfo = {data.post}
                                user = {data.user}
                            />
                        )
                    })
                )}
            </div>
        </Container>
    )
}

export default OrderDetail