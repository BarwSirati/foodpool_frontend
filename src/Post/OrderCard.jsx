import React from 'react'
import { useState } from 'react'

const OrderCard = (props) => {

    const [statusColor, setStatusColor] = useState('bg-orange-400')

    const status = [
        { name: 'รอยืนยัน', color: 'bg-orange-400' },
        { name: 'กำลังซื้อ', color: 'bg-indigo-400' },
        { name: 'กำลังส่ง', color: 'bg-blue-400' },
        { name: 'ส่งสำเร็จ', color: 'bg-green-500' },
        // { name: 'ยกเลิก', color: 'bg-red-400' },
    ]

    const changeStatus = (color) => {
        setStatusColor(color)
        // Wait for UpdateStatus API
    }

    return (
        <div className={`bg-[#353474] text-[#FAF5FF] flex p-5 rounded-xl mt-5 xl:mx-60 lg:mx-10 sm:mx-5`}>
            <div className="flex w-full justify-between space-x-2 items-center">
                <div className="flex-col">
                    <div className='flex space-x-2'>
                        <h1 className="md:text-2xl">{props.menu}</h1>
                        <h2 className="hidden md:block text-xl md:pt-1">({props.postInfo.stall.name})</h2>
                    </div>
                    <h3 className='md:text-base sm:text-sm text-xs'>สถานที่รับ : {props.postInfo.location}</h3>
                </div>
                <div className='flex-col'>
                    <h3 className='md:text-base sm:text-sm text-xs'>ชื่อผู้รับ : {props.user.name} {props.user.lastname}</h3>
                    <h3 className='md:text-base sm:text-sm text-xs'>Line : {props.user.line}</h3>
                    <h3 className='md:text-base sm:text-sm text-xs'>Tel : {props.user.tel}</h3>
                </div>
                <select onChange={(e) => changeStatus(e.target.value)} className={`appearance-none ${statusColor} lg:my-2 lg:py-5 px-3 py-2 rounded-md`}>
                    <option value='bg-orange-400' >{status[0].name}</option>
                    <option value='bg-indigo-400' >{status[1].name}</option>
                    <option value='bg-blue-400' >{status[2].name}</option>
                    <option value='bg-green-500' >{status[3].name}</option>
                    {/* <option value='bg-red-400' >{status[4].name}</option> */}
                </select>
            </div>
        </div>
    )
}

export default OrderCard