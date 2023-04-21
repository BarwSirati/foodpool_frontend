import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Card = ({ menu, name, type, location, user }) => {
  const [number, setNumber] = useState(0)
  let statenum = 'ฝาก'

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
    <div className="md:w-[30%] md:m-5 m-4">
      <div className="bg-headcard rounded-t-xl px-5 py-4 relative text-white">
        <p>ข้าวผัดผงกระหรี่ไก่</p>
        <label className=" text-xs">โรงพระเทพ</label>
        <div className="absolute top-5 right-6 bg-[#59DDC5] px-5 py-3 rounded-md text-black text-xs">
          {number}/10
        </div>
      </div>
      <div className="bg-bodycard rounded-b-xl px-9 pt-7 pb-16 relative text-black shadow-md">
        <p>ผู้รับฝาก : {name}</p>
        <p>ประเภท : </p>
        <p>ที่ส่ง : </p>
        <button
          className="absolute bottom-4 right-9 bg-[#38BDF8] px-6 py-2 rounded-lg text-white"
          type="submit"
          onClick={addnum}
        >
          {statenum}
        </button>
      </div>
    </div>
  )
}

export default Card
