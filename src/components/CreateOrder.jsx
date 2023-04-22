import React from 'react'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import Input from './Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import MenuList from './MenuList'

const schema = yup.object().shape({
  menuName: yup.string().required(),
  note: yup.string(),
})

const CreateOrder = ({ onClose, state, postId, userId }) => {
  let fixMenu = false
  let createMenu = ''

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    data.userId = userId
    data.postId = postId
    console.log(data)
    onClose()
  }

  const typepost = 'เมนูเดียวกัน'

  if (typepost == 'เมนูเดียวกัน') {
    fixMenu = true
    createMenu = 'ข้าวผัดผงกระหรี่ไก่'
  }
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="absolute right-5">
      <label
        className="btn btn-info text-xl text-white"
        onClick={() => onClose()}
      >
        ฝาก
      </label>
      <div className={`modal backdrop-blur-sm ${state ? 'modal-open' : ''}`}>
        <div className="modal-box max-w-5xl bg-white divide-y-2 divide-line">
          <h2 className="text-2xl font-semibold mb-5">Create Order</h2>
          <div>
            <div className="w-full  mt-5 px-5 py-2 rounded-lg text-lg">
              <h1 className=" text-2xl">
                ชื่อร้าน : ข้าวผัดผงกระหรี่ไก่ (โรงพระเทพ)
              </h1>
              <div className="ml-3">
                <p>ประเภท : ร้านเดียวกัน</p>
                <p>ผู้รับฝาก : xxxxx xxxxxx</p>
                <p>ID : xxxxxxx</p>
                <p>tele : 0xx-xxx-xxxx</p>
                <p>สถานที่จัดส่ง : 0xx-xxx-xxxx</p>
                <p>เพิ่มเติม : บลาๆๆๆๆๆ</p>
              </div>
            </div>
            <h2 className="text-2xl font-medium">สั่งตามเพื่อน</h2>
            <div className="space-y-3 mt-3 h-96 overflow-auto">
              {items.map((item) => {
                return <MenuList />
              })}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
              <Input
                id={'menuName'}
                label={'ชื่อเมนู'}
                placeholder={'ชื่อเมนู'}
                register={register('menuName')}
                error={errors.menuName?.message}
                readOnly={fixMenu}
                value={createMenu}
              />
              <Input
                id={'note'}
                label={'อื่นๆ'}
                placeholder={'อื่นๆ'}
                register={register('note')}
                error={errors.note?.message}
              />
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
