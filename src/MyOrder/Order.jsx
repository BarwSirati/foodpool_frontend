import React from 'react'
import { useState } from 'react'

const Order = (props) => {

    const state = ["ดำเนินการ", "เสร็จสิ้น"]

    const stateColor = ["#38BDF8", "#59DDC5"]

    const [expanded, setExpanded] = useState(false)

    return (
        <div className='pt-4'>
            <div className='bg-[#353474] text-[#FAF5FF] flex py-4 px-5 rounded-xl justify-between'>
                <div className='flex mt-1'>
                    <h1 className='text-2xl'>ข้าวผัดผงกระหรี่ไก่</h1>
                    <h2 className='text-xl pt-1 ml-2'>(โรงพระเทพ)</h2>
                </div>
                <div className='flex'>
                    <div className={`bg-[${stateColor[0]}] text-white mx-3 p-2 rounded-2xl`}>{state[0]}</div>
                    {!expanded && <button className='' onClick={() => setExpanded(true)}>V</button>}
                    {expanded && <button className=' mx-[1.5px]' onClick={() => setExpanded(false)}>^</button>}
                </div>
            </div>
            {expanded && <div className=''>
                test
            </div>}
            
        </div>
    )
}

export default Order