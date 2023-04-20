import React from 'react'
import Head from './Head'

const Post = ({isVisible, onClose}) =>{
    if (!isVisible) return null

    return(
        <div className='bg-black bg-opacity-25 fixed h-full inset-0 backdrop-blur-sm flex justify-center items-center'>
            <div className=' w-4/6'>
                <div className='bg-white text-black py-7 px-10 rounded-lg'>
                    <Head text={"Create Post"}/>
                    <form action="" className='font-bold text-2xl mt-5'>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <p>ชื่อร้าน</p>
                                <input className='bg-gray-200 rounded-lg focus:outline-none' type="text" />
                            </div>   
                            <div className='flex gap-3'>
                                <div>
                                    <p>ประเภท</p>
                                    <input className='bg-gray-200 rounded-lg focus:outline-none' type="text" />
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