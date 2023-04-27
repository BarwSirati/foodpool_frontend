import React from 'react'

const MenuList = ({menu, name}) => {

  return (
    <div className="flex md:p-3 p-2 bg-headcard rounded-xl text-white">
      <div className="w-1/2 flex items-center font-semibold">
        ข้าวกะเพราไก่ทอด{name}
      </div>
      <div className="w-1/2 text-right">
        <button className="btn btn-info text-white" onClick={() => menu("ข้าวกะเพราไก่ทอด"+name)}>เอาด้วย</button>
      </div>
    </div>
  )
}

export default MenuList
