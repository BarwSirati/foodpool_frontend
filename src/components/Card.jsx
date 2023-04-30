import React from 'react'
import { useState } from 'react'
import CreateOrder from '../Home/CreateOrder'

const Card = ({ menuName, stallName, limitOrder, type, location, owner, post, user, countOrder, refresh }) => {
  const [number, setNumber] = useState(0)
  let state = true

  const [createOrder, setCreateOrder] = useState(false)

  if (countOrder == limitOrder) {
    state = false
  }


  return (
    <div className="md:w-[40%] lg:w-[35%] xl:w-[30%]  md:m-5 m-4">
      <div className="bg-headcard rounded-t-xl px-5 py-4 relative text-white">
        <p>{menuName}</p>
        <label className=" text-xs">{stallName}</label>
        <div className={`absolute top-5 right-6 ${state ? 'bg-[#59DDC5]' : 'bg-red-400 text-white'} px-5 py-3 rounded-md text-black text-xs`}>
          {countOrder}/{limitOrder}
        </div>
      </div>
      <div className="bg-bodycard rounded-b-xl px-9 pt-7 pb-16 relative text-black shadow-md">
        <p>ผู้รับฝาก : {owner}</p>
        <p>ประเภท : {type ? "ร้านเดียวกัน" : "ร้านไหนก็ได้"}</p>
        <p>ที่ส่ง : {location}</p>
        <CreateOrder
          state={createOrder}
          onClose={() => setCreateOrder(!createOrder)}
          post={post}
          user={user}
          owner={owner}
          isFull={state}
          refresh={refresh}
        />
      </div>
    </div>
  )
}

export default Card
