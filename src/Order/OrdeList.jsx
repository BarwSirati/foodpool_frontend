import React from 'react'
import { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

const OrderList = () => {
  const state = ['ดำเนินการ', 'เสร็จสิ้น']

  const stateColor = ['#38BDF8', '#59DDC5']

  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <div className="bg-[#353474] text-[#FAF5FF] flex p-5 rounded-xl mt-5">
        <div className="flex w-full">
          <div className="w-full flex space-x-2">
            <h1 className="md:text-2xl">ข้าวผัดผงกระหรี่ไก่</h1>
            <h2 className="hidden md:block text-xl md:pt-1">(โรงพระเทพ)</h2>
          </div>
          <div className="w-full flex">
            <div className="ml-auto flex space-x-2">
              <h1 className="md:pt-1">{state[0]}</h1>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  onClick={() => {
                    setExpanded(!expanded)
                  }}
                />
                <MdExpandMore className="swap-off text-2xl font-semibold" />
                <MdExpandLess className="swap-on text-2xl font-semibold" />
              </label>
            </div>
          </div>
        </div>
      </div>
      {expanded && <div className="">test</div>}
    </div>
  )
}

export default OrderList
