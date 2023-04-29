import React from 'react'
import { useState } from 'react'

const OrderCard = (props) => {

    const state = [
        { name: 'รอยืนยัน', color: 'bg-orange-400' },
        { name: 'กำลังซื้อ', color: 'bg-indigo-400' },
        { name: 'กำลังส่ง', color: 'bg-blue-400' },
        { name: 'ส่งสำเร็จ', color: 'bg-green-500' },
        { name: 'ยกเลิก', color: 'bg-red-400' },
    ]

    return (
        <div className={`bg-[#353474] text-[#FAF5FF] flex p-5 rounded-xl mt-5`}>
            <div className="flex w-full justify-between space-x-2">
                <div className="flex-col">
                    <div className='flex space-x-2'>
                        <h1 className="md:text-2xl">menu</h1>
                        <h2 className="hidden md:block text-xl md:pt-1">(stall)</h2>
                    </div>
                    <h3 className='md:text-lg'>สถานที่รับ : </h3>
                </div>
                <h1 className={`flex items-center ${state[0].color} rounded-md md:px-5 px-2`}>
                    {state[0].name}
                </h1>
            </div>
        </div>
    )
}

export default OrderCard