import React from "react";
import { useState, useEffect } from 'react'


const CreateOrder = ({onClose, state, id}) =>{

  // const onSubmit = async (data) => {
  //   data.userId = user.id
  //   console.log(data)
  //   onClose()
  // }

  return(
    <div className="ml-auto">
    <label className="btn btn-warning text-2xl" onClick={() => onClose()}>
      ฝาก
    </label>
    <div className={`modal backdrop-blur-sm ${state ? 'modal-open' : ''}`}>
      <div className="modal-box max-w-5xl bg-white divide-y-2 divide-line">
        <h2 className="text-2xl font-semibold mb-5">Create Post</h2>
        <div>
          <div className="w-full bg-headcard text-white mt-5 px-5 py-2 rounded-lg text-lg">
              <h1 className=" text-2xl">ชื่อร้าน : ข้าวผัดผงกระหรี่ไก่ (โรงพระเทพ)</h1>
              <div className="ml-3">
              <p>ประเภท : ร้านเดียวกัน</p>
              <p>ผู้รับฝาก : xxxxx xxxxxx</p>
              <p>ID : xxxxxxx</p>
              <p>tele : 0xx-xxx-xxxx</p>
              <p>สถานที่จัดส่ง : 0xx-xxx-xxxx</p>
              <p>เพิ่มเติม : บลาๆๆๆๆๆ</p>
              </div>
          </div>
          <form className="mt-5 space-y-5">
            <div className="w-full flex space-x-2 justify-end">
              <button type="submit" className="btn btn-success">
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-error"
                onClick={() => onClose()}
              >
                Discard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
}

export default CreateOrder