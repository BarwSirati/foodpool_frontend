import React from "react";
import { getPostById } from "../services/post.service";
import { useEffect, useState } from "react";

const HeadCreateOrder = ({post}) =>{

    const [isLoading, setIsLoading] = useState([])
    const [Postdata, setPostdata] = useState([])

    console.log(post)

    return(
        <h2 className="text-2xl mb-5">
        <div className="w-full rounded-lg text-lg">
          <h1 className="md:text-2xl text-lg text-center">
            {post.menuName} ({post.stall.name})
          </h1>
          <div className="mx-auto">
            <p>จัดซื้อโดย : {post.user.name} {post.user.username}</p>
            <p>สถานที่จัดส่ง : {post.location}</p>
            <p>เพิ่มเติม : {post.description}</p>
          </div>
        </div>
        </h2>
    )
}

export default HeadCreateOrder