import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Order from './Order'

const MyOrder = () => {

    const url = 'https://jsonplaceholder.typicode.com/users'
    const [order, setOrder] = useState(null)

    useEffect(() => {
        try {
            axios.get(url)
                .then((res) => {
                    setOrder(res)
                    console.log(res)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className='bg-white w-screen h-screen pt-5 px-10'>
            <h1 className='text-3xl font-semibold py-5'>My order history</h1>
            <hr className='border-[3px] border-[#DB5227]'/>
            <div className='flex-row pt-10 px-20'>
                <Order />
                <Order />
            </div>
        </div>
    )
}

export default MyOrder