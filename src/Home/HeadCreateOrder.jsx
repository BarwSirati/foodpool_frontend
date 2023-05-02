import React from "react";

const HeadCreateOrder = ({post}) =>{

    return(
        <h2 className="text-2xl mb-5">
        <div className="w-full rounded-lg text-lg bg-blue-400 px-5 py-2 shadow-lg">
          <h1 className="md:text-2xl text-lg text-center mb-2">
            {post.menuName} ({post.stall.name})
          </h1>
          <div className="mx-auto">
            <div className="flex">
            <p className=" basis-1/2">จัดซื้อโดย : {post.user.name} {post.user.username}</p>
            <p>สถานที่จัดส่ง : {post.location}</p>
            </div>
            <div className="flex">
            <p className="basis-1/2">เบอร์ : {post.user.tel}</p>
            <p>ไลน์ : {post.user.line}</p>
            </div>
            <p>เพิ่มเติม : {post.description}</p>
          </div>
        </div>
        </h2>
    )
}

export default HeadCreateOrder