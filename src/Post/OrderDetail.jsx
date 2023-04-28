import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

import Container from '../components/Container'
import { useAuth } from '../contexts/AuthContext'

import { getOrderByPostId } from '../services/order.service'

const OrderDetail = () => {
    const [isloading, setIsLoading] = useState(false)
    const { postId } = useParams()

    const { user } = useAuth()

    // useEffect(() => {
    //     const getPostByUser = async () => {
    //         setIsLoading(true)
    //         const res = await getOrderByPostId()
    //         setPostData(res)
    //         setIsLoading(false)
    //     }
    //     getPostByUser()
    // }, [])
    
    return (
        <Container>
            OrderDetail
        </Container>
    )
}

export default OrderDetail