import React from 'react'

const MenuList = ({ menu, name, curMenu }) => {
  return (
    <div className={`flex md:p-3 p-2 ${(curMenu != name) ? 'bg-violet-600':'bg-headcard'}  rounded-xl text-white w-full`}>
      <div className="w-1/2 flex items-center">{name}</div>
      <div className="w-1/2 text-right flex items-center justify-end">
        <button
          className="btn btn-info text-white"
          onClick={() => menu(name)}
        >
          เอาด้วย
        </button>
      </div>
    </div>
  )
}

export default MenuList
