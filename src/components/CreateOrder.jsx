import React from 'react'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import Input from './Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import MenuList from './MenuList'
import { createOrder, getAnonOrderByPostId } from '../services/order.service'

const schema = yup.object().shape({
  menuName: yup.string().required(),
  note: yup.string(),
})

const CreateOrder = ({ onClose, state, postId, user, isFull}) => {

  const [order,setOrder] = useState([])
  const [isLoading,setIsLoading] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() =>{
    const fetchOrder = async () => {
      setIsLoading(true)
      const res = await getAnonOrderByPostId(postId)
      setOrder(res)
      setIsLoading(false)
    }

    fetchOrder()
  },[order])

  const onSubmit = async (data) => {
    data.userId = user.id
    data.postId = postId
    await createOrder({...data})
    onClose()
  }

  // console.log(order)

  return (
    <div className="absolute right-5">
      <label
        className={`btn ${isFull ? 'btn-info' : 'btn-disabled'} text-xl hover:bg-blue-500 text-white font-normal`}
        onClick={() => onClose()}
      >
        {isFull ? 'ฝาก':'Full'}
      </label>
      <div className={`modal backdrop-blur-sm ${state ? 'modal-open' : ''}`}>
        <div className="modal-box max-w-5xl bg-white divide-y-2 divide-line">
          <h2 className="text-2xl font-semibold mb-5">Create Order</h2>
          <div>
            {/* <div className="w-full  mt-5 px-5 py-2 rounded-lg text-lg bg-lime-400">
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
            </div> */}
            <h2 className="text-2xl font-medium mt-3">สั่งตามเพื่อน</h2>
            <div className="space-y-3 mt-3 h-40 overflow-auto">
              {order.map((data) => {
                return <MenuList menu={(menu) => setValue('menuName',menu)} name={data.menuName} key={data.id}/>
              })}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
              <Input
                id={'menuName'}
                label={'ชื่อเมนู'}
                placeholder={'ชื่อเมนู'}
                register={register('menuName')}
                error={errors.menuName?.message}
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
