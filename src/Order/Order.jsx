import React, { useEffect, useState } from 'react'

import { useAuth } from '../contexts/AuthContext'
import OrderList from './OrderList'
import Container from '../components/Container'

import { getOrderByUserId } from '../services/order.service'

const Order = () => {

  const [isloading, setIsLoading] = useState(false)
  const [orderData, setOrderData] = useState([])

  const { user } = useAuth()

  useEffect(() => {
    const getOrderByUser = async() => {
      setIsLoading(true)
      const res = await getOrderByUserId(user.id)
      console.log(res)
      setOrderData(res)
      setIsLoading(false)
    }

    getOrderByUser()
  }, [])

  return (
    <Container>
      <h2 className="text-2xl font-semibold">Order</h2>
      <div className="pt-5 space-y-4">
        {isloading ? (
          <h1 className="text-3xl font-semibold">Loading</h1>
        ) : (
          orderData.map((data) => {
            <OrderList />
          })
        )}
      </div>
    </Container>
  )
}

export default Order
