import React from 'react'
import { useState, useEffect } from 'react'
import { getStall } from '../services/stall.service'


const SearchStall = ({stall, page}) => {
  const [stallData, setStallData] = useState([])

  const showStall = (e) =>{
    stall(e.target.value)
    page()
  }

  useEffect(() => {
    const fetchStalls = async () => {
      const stall = await getStall()
      setStallData(stall)
    }

    fetchStalls()
  }, [])

  return (
    <select
      id="stall"
      defaultValue={''}
      className="bg-gray-200 rounded-xl select select-sm"
      onChange={(e) => showStall(e)}
    >
      <option id="" value="">
        เลือกร้านอาหาร
      </option>
      {stallData.map((stall) => (
        <option value={stall.name} key={stall.id}>
          {stall.name}
        </option>
      ))}
    </select>
  )
}

export default SearchStall
