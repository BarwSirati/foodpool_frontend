import React from 'react'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import Input from '../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import MenuList from '../components/MenuList'
import { createOrder, getAnonOrderByPostId } from '../services/order.service'
import Swal from 'sweetalert2'
import HeadCreateOrder from './HeadCreateOrder'

const schema = yup.object().shape({
  menuName: yup.string().required(),
  note: yup.string(),
})

const CreateOrder = ({ onClose, state, post, user, isFull, refresh }) => {
  const [order, setOrder] = useState([])
  const [isLoading, setIsLoading] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    const fetchOrder = async () => {
      setIsLoading(true)
      const res = await getAnonOrderByPostId(post.id)
      setOrder(res)
      setIsLoading(false)
    }

    fetchOrder()
  }, [])

  const onSubmit = async (data) => {
    data.userId = user.id
    data.postId = post.id
    await createOrder({ ...data })
    refresh()
    onClose()
  }

  const showCreateOrder = () => {
    if (!user.point) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No have point',
        footer: '<a href="">Why do I have this issue?</a>',
      })
    } else {
      onClose()
    }
  }

  // console.log(Math.floor(Math.random()*(6-1))+1)

  return (
    <div className="absolute right-5">
      <label
        className={`btn ${
          isFull ? 'btn-info font-normal' : 'btn-disabled'
        } text-xl hover:bg-blue-500 text-white `}
        onClick={() => showCreateOrder()}
      >
        {isFull ? 'ฝาก' : 'Full'}
      </label>
      <div className={`modal backdrop-blur-sm ${state ? 'modal-open' : ''}`}>
        <div
          className={`modal-box max-w-5xl ${
            order.length > 0 ? 'max-h-[80vh]' : ''
          } bg-white `}
        >
          <div>
            <HeadCreateOrder post={post}/>
            <h2 className="mt-5">สั่งตามเพื่อน</h2>
            <div
              className={`menuBox space-y-3  mt-3  w-full ${
                order.length > 0 ? 'max-h-40' : 'md:h-20'
              } overflow-auto`}
            >
              {order.length > 0 ? (
                order.map((data) => {
                  return (
                    <MenuList
                      menu={(menu) => setValue('menuName', menu)}
                      curMenu={getValues('menuName')}
                      name={data.menuName}
                      key={data.id}
                    />
                  )
                })
              ) : (
                  <div className="flex md:p-5 p-2 bg-headcard rounded-xl text-white w-full">
                    <div className="w-full md:text-2xl flex justify-center items-center">
                      ยังไม่มีเมนูของเพื่อนๆนะจ๊ะ 
                    </div>
                  </div>
              )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
              <div className=' relative'>
              <Input
                id={'menuName'}
                label={'ชื่อเมนู'}
                placeholder={'ชื่อเมนู'}
                register={register('menuName')}
                error={errors.menuName?.message}
              />
              {order.length > 1 ? (<div className='btn btn-warning absolute top-9 right-2 ' onClick={() => setValue('menuName', order[Math.floor(Math.random()*(order.length-1))+1].menuName)}>?</div>) : (<div></div>) }
              </div>
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
