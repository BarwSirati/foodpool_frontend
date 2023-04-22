import React from 'react'

const MenuList = () => {
  return (
    <div className="flex md:p-3 p-2 bg-headcard rounded-xl text-white">
      <div className="w-1/2 flex items-center font-semibold">
        ข้าวกะเพราไก่ทอด
      </div>
      <div className="w-1/2 text-right">
        <button className="btn btn-info text-white">เอาด้วย</button>
      </div>
    </div>
  )
}

export default MenuList
