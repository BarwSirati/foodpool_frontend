import React, { useEffect, useState } from 'react'

import { useAuth } from '../contexts/AuthContext'
import OrderList from './OrderList'
import Container from '../components/Container'
import Pagination from '../components/Pagination'

import { getOrderByUserId } from '../services/order.service'

const Order = () => {
  const [isloading, setIsLoading] = useState(false)
  const [orderData, setOrderData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  let postsPerPage = 8

  const { user } = useAuth()

  useEffect(() => {
    const getOrderByUser = async () => {
      setIsLoading(true)
      const res = await getOrderByUserId(user.id)
      // console.log(res)
      setOrderData(res)
      setIsLoading(false)
    }

    getOrderByUser()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  let currentOrders = orderData.slice(
    orderData.length - indexOfLastPost,
    orderData.length - indexOfFirstPost
  )
  if (indexOfLastPost > orderData.length) {
    currentOrders = orderData.slice(0, orderData.length - indexOfFirstPost)
  }

  console.log(orderData)

  return (
    <Container>
      <h2 className="text-2xl font-semibold">My order history</h2>
      <div className="pt-5 space-y-4">
        {isloading ? (
          <h1 className="text-3xl font-semibold">Loading</h1>
        ) : (
          currentOrders.map((data) => {
            // console.log(data)
            return(
              <OrderList 
                key = {data.id}
                user = {data.user}
                menu = {data.menuName}
                note = {data.note}
                postInfo = {data.post}
                status = {data.status}
              />
            )
          })
        )}
      </div>
      <div className="pagination pt-10">
        <Pagination
          postPerPage={postsPerPage}
          totalPosts={orderData.length}
          paginate={(pageNumber) => setCurrentPage(pageNumber + 1)}
        />
      </div>
    </Container>
  )
}

export default Order
