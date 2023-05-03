import React from 'react'
import { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { updateByPostUser } from '../services/post.service'
import Swal from 'sweetalert2'

const PostList = (props) => {

    const postStatus = [
        {status: 'open', color:'bg-green-500'}, 
        {status: 'close', color:'bg-red-400'}
    ]
    const typePost = ['ร้านไหนก็ได้', 'ร้านเดียวกัน']

    const [expanded, setExpanded] = useState(false)
    const [status,setStatus] = useState(props.status)

    const updateStatusPost = () => {
        if (!status) {
            Swal.fire({
                title: 'Do you want to save the changes?',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
            }).then((result) => {
                if (result.isConfirmed) {
                    const res = updateByPostUser(1,props.id)
                    if (res) {
                        setStatus(1)
                    }
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
    }

    return (
        <div>
            <div className={`bg-[#353474] text-[#FAF5FF] flex p-5 ${
                expanded ? 'rounded-t-xl' : 'rounded-xl'
                } mt-5`}>
                <div className="flex w-full">
                <div className="w-full flex space-x-2">
                    <h1 className="md:text-2xl">{props.menu}</h1>
                    <h2 className="hidden md:block text-xl md:pt-1">({props.stall.name})</h2>
                </div>
                <div className="w-full flex">
                    <div className="ml-auto flex space-x-2">
                        <div className="ml-auto flex space-x-2">
                            <h1 className={`md:pt-1 ${postStatus[status].color} rounded-md px-5 text-[#FAF5FF]`}>
                                <button onClick={updateStatusPost} className={`${status == 1 ? 'cursor-default' : ''}`}>
                                    {postStatus[status].status}
                                </button>
                            </h1>
                        </div>
                        <h1 className={`md:pt-1 btn-info rounded-md px-5 text-[#FAF5FF]`}>
                            <Link to={`/post/${props.id}`}>
                                detail
                            </Link>
                        </h1>
                        <label className="swap swap-rotate">
                            <input
                            type="checkbox"
                            onClick={() => {
                                setExpanded(!expanded)
                            }}
                            />
                            <MdExpandMore className="swap-off text-2xl font-semibold" />
                            <MdExpandLess className="swap-on text-2xl font-semibold" />
                        </label>
                    </div>
                </div>
                </div>
            </div>
            {expanded &&
                <div className="bg-purple-100 rounded-b-xl p-8">
                    <h1>ชื่อผู้ส่ง : {props.user.name} {props.user.lastname}</h1>
                    <h1>สถานที่รับ : {props.location}</h1>
                    <h1>เบอร์โทรศัพท์ผู้ส่ง : {props.user.tel}</h1>
                    <h1>Line : {props.user.line}</h1>
                    <h1>ประเภทการซื้อ : {typePost[props.type]}</h1>
                    
                </div>
            }
        </div>
    )
}

export default PostList