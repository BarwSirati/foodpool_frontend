import React from 'react'
import { useState } from 'react'
import { updateStatusByPostUser } from '../services/order.service'
import Swal from 'sweetalert2';

const OrderCard = (props) => {

    // const [statusColor, setStatusColor] = useState('orange-400')

    const status = [
        { name: 'รอยืนยัน', color: 'orange-400' },
        { name: 'กำลังซื้อ', color: 'indigo-400' },
        { name: 'กำลังส่ง', color: 'blue-400' },
        { name: 'ส่งสำเร็จ', color: 'green-500' },
        { name: 'ยกเลิก', color: 'red-400' },
    ]

    const changeStatus = (newStatus) => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const res = updateStatusByPostUser(newStatus, props.orderId)
                if (res) {
                    // setStatusColor(color)
                    console.log(newStatus)
                    console.log(props.orderId)
                }
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    return (
        <div className={`bg-[#353474] text-[#FAF5FF] flex p-5 rounded-xl mt-5 xl:mx-40 lg:mx-10 sm:mx-5`}>
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
                <select value={props.status} onChange={(e) => changeStatus(e.target.value)} className={`appearance-none bg-${status[props.status].color} lg:my-2 lg:py-5 px-3 py-2 rounded-md`}>
                    <option value='0'>{status[0].name}</option>
                    <option value='1'>{status[1].name}</option>
                    <option value='2'>{status[2].name}</option>
                    <option value='3'>{status[3].name}</option>
                    {/* <option value='bg-red-400' >{status[4].name}</option> */}
                </select>
            </div>
        </div>
    )
}

export default OrderCard