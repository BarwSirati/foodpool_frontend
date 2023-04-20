import React, { useEffect, useState } from 'react'
import axios from 'axios'

import OrderList from './OrdeList'
import Container from '../components/Container'

const Order = () => {
  // useEffect(() => {
  //     try {
  //         axios.get(url)
  //             .then((res) => {
  //                 setOrder(res)
  //                 console.log(res)
  //             })
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }, [])

  return (
    <Container>
      <h2 className="text-2xl font-semibold">Order</h2>
      <div className="pt-5 space-y-4">
        <OrderList />
        <OrderList />
      </div>
    </Container>
  )
}

export default Order
