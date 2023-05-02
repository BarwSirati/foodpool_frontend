import React from 'react'
import { useState, useEffect } from 'react'
import Select from '../components/Select'
import * as yup from 'yup'
import Input from '../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { getStall } from '../services/stall.service'
import { createPost } from '../services/post.service'

const schema = yup.object().shape({
  stallId: yup.number().required(),
  menuName: yup.string().required(),
  location: yup.string().required(),
  description: yup.string(),
  typePost: yup.number().required(),
  limitOrder: yup.number().min(1).max(10).required(),
})

const CreatePost = ({ onClose, user, state }) => {
  const [stallData, setStallData] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const inputform = [
    {
      key: 1,
      type: 1,
      name: 'stallId',
      label: 'ชื่อร้าน',
      typeinput: 'text',
      error: errors.stallId?.message,
    },
    {
      key: 2,
      type: 2,
      name: 'menuName',
      label: 'ชื่อเมนู',
      typeinput: 'text',
      error: errors.menuName?.message,
    },
    {
      key: 3,
      type: 1,
      name: 'typePost',
      label: 'ประเภทคำสั่งซื้อ',
      typeinput: 'text',
      error: errors.typePost?.message,
    },
    {
      key: 4,
      type: 2,
      name: 'location',
      label: 'สถานที่จัดส่ง',
      typeinput: 'text',
      error: errors.location?.message,
    },
    {
      key: 5,
      type: 2,
      name: 'limitOrder',
      label: 'จำนวนที่รับฝาก',
      typeinput: 'number',
      error: errors.limitOrder?.message,
    },
    {
      key: 6,
      type: 2,
      name: 'description',
      label: 'อื่นๆ',
      typeinput: 'text',
      error: errors.description?.message,
    },
  ]

  const buttype = [
    { name: 'ร้านไหนก็ได้', id: '0' },
    { name: 'ร้านเดียวกัน', id: '1' },
  ]

  useEffect(() => {
    const fetchDatas = async () => {
      const stall = await getStall()
      setStallData(stall)
    }

    fetchDatas()
  }, [])

  const onSubmit = async (data) => {
    data.userId = user.id
    console.log(data)
    await createPost({ ...data })
    onClose()
  }

  return (
    <div>
      <div
        className="md:tooltip md:tooltip-bottom max-md:bottom-7 max-md:right-5 max-md:fixed max-md:z-50 max-md:btn-circle max-md:btn-md max-md:shadow-xl btn btn-warning md:btn-sm flex "
        data-tip="Create Post"
        onClick={() => onClose()}
      >
        <label className="text-2xl ">+</label>
      </div>
      <div className={`modal backdrop-blur-sm ${state ? 'modal-open' : ''}`}>
        <div className="modal-box max-w-5xl bg-white divide-y-2 divide-line">
          <h2 className="text-2xl font-semibold mb-5">Create Post</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
              {inputform.map((item) => {
                return item.type == 1 ? (
                  <Select
                    id={item.name}
                    label={item.label}
                    options={
                      item.name == 'stallId'
                        ? [{ name: 'เลือกร้านอาหาร', id: '' }].concat(stallData)
                        : [{ name: 'เลือกประเภทคำสั่งซื้อ', id: '' }].concat(
                            buttype
                          )
                    }
                    register={register(item.name)}
                    error={item.error}
                    key={item.key}
                  />
                ) : (
                  <Input
                    id={item.name}
                    type={item.type}
                    label={item.label}
                    placeholder={item.label}
                    register={register(item.name)}
                    error={item.error}
                    key={item.key}
                  />
                )
              })}
              <div className="w-full flex space-x-2 md:justify-end justify-center">
                <button type="submit" className="btn btn-success">
                  Post
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

export default CreatePost
