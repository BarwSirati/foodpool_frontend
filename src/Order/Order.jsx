import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import OrderList from './OrderList'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SelectStatus from './SelectStatus'
import { getOrderByUserId, updateStatusByOrderUser } from '../services/order.service'

const Order = () => {
  const [isloading, setIsLoading] = useState(false)
  const [orderData, setOrderData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchStatus, setSearchStatus] = useState(-1)
  let postsPerPage = 8

  const { user } = useAuth()

  useEffect(() => {
    const getOrderByUser = async () => {
      setIsLoading(true)
      const res = await getOrderByUserId(user.id)
      setOrderData(res)
      setIsLoading(false)
    }

    getOrderByUser()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const orderfilter = orderData
    .filter((item) => {
      return searchStatus == -1
        ? item
        : item.status == searchStatus
    })
  const currentOrders = orderfilter.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <Container>
      <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold">My order history</h2>
        <SelectStatus
          searchStatus={(searchStatus) => setSearchStatus(searchStatus)}
          page={() => setCurrentPage(1)}
        />
      </div>
      <div className="pt-5 space-y-4">
        {isloading ? (
          <h1 className="text-3xl font-semibold">Loading</h1>
        ) : orderfilter.length === 0 ? (
          <h1 className="text-3xl font-semibold text-center">No data</h1>
        ) : (
          currentOrders.map((data) => {
            return(
              <OrderList 
                key = {data.id}
                user = {data.user}
                menu = {data.menuName}
                note = {data.note}
                postInfo = {data.post}
                status = {data.status}
                cancel = {() => updateStatusByOrderUser(+4, data.id)}
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
