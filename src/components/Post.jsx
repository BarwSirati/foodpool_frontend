import React from 'react'
import Head from './Head'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Select from './Select'
import * as yup from 'yup'



const schema = yup.object().shape({
    location: yup.string().required(),
    other: yup.string(),
    deposit: yup.string().min(1).max(10).required()
})

const Post = ({isVisible, onClose}) =>{

    if (!isVisible) return null
    
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchDatas = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(res.data)
        }
    
        fetchDatas()
        }, [])


    return(
        <div className='bg-black bg-opacity-25 fixed h-full inset-0 backdrop-blur-sm flex justify-center items-center'>
            <div className=' w-3/6'>
                <div className='bg-white text-black py-7 px-10 rounded-lg'>
                    <Head text={"Create Post"}/>
                    <form action="" className='font-bold text-2xl mt-5'>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <p>ชื่อร้าน</p>
                                <Select data={data}/>
                            </div>   
                            <div className='flex gap-3'>
                                <div>
                                    <p>ประเภท</p>
                                    <Select data={data}/>
                                </div>
                                <div>
                                    <p>สถานที่จัดส่ง</p>
                                    <input className='bg-gray-200 rounded-lg focus:outline-none' type="text" />
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div>
                                    <p>อื่นๆ</p>
                                    <input className='bg-gray-200 rounded-lg focus:outline-none' type="text" />
                                </div>
                                <div>
                                    <p>รับฝากสูงสุด</p>
                                    <input className='bg-gray-200 rounded-lg focus:outline-none' type="text" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='text-white flex justify-between'>
                    <button className='bg-red-500 rounded-lg py-2 px-3 mt-5' onClick={() => onClose()}>close</button>
                    <button className=' bg-green-300 rounded-lg py-2 px-3 mt-5'>Post</button>
                    </div>
                </div>
            </div>
            </div>
    )

}

export default Post