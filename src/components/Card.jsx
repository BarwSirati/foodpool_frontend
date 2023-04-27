import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CreateOrder from './CreateOrder'

const Card = ({ menuName, type, location, owner, stallName, postId }) => {
  const [number, setNumber] = useState(0)
  let statenum = 'ฝาก'

  const [createOrder, setCreateOrder] = useState(false)

  const addnum = () => {
    if (number < 10) {
      setNumber(number + 1)
    }
    console.log(user)
  }
  if (number == 10) {
    statenum = 'Full'
  }

  return (
    <div className="md:w-[40%] lg:w-[35%] xl:w-[30%]  md:m-5 m-4">
      <div className="bg-headcard rounded-t-xl px-5 py-4 relative text-white">
        <p>{menuName}</p>
        <label className=" text-xs">{stallName}</label>
        <div className="absolute top-5 right-6 bg-[#59DDC5] px-5 py-3 rounded-md text-black text-xs">
          {number}/10
        </div>
      </div>
      <div className="bg-bodycard rounded-b-xl px-9 pt-7 pb-16 relative text-black shadow-md">
        <p>ผู้รับฝาก : {owner}</p>
        <p>ประเภท : {type ? "ร้านเดียวกัน" : "ร้านไหนก็ได้"}</p>
        <p>ที่ส่ง : {location}</p>
        <CreateOrder
          state={createOrder}
          onClose={() => setCreateOrder(!createOrder)}
          postId={postId}
          owner={owner}
        />
      </div>
    </div>
  )
}

export default Card
