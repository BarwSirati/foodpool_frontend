import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Container from '../components/Container'
import Card from '../components/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../components/Input'
import * as yup from 'yup'
import Select from '../components/Select'

const schema = yup.object().shape({
  stallId: yup.number().required(),
  menuName: yup.string().required(),
  location: yup.string().required(),
  description: yup.string(),
  typePost: yup.number().required(),
  limitOrder: yup.number().min(1).max(10).required(),
})

const Home = () => {
  const [createPost, setCreatePost] = useState(false)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  const { user } = useAuth()

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(res.data)
    }

    fetchDatas()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  let currentPosts = data.slice(
    data.length - indexOfLastPost,
    data.length - indexOfFirstPost
  )
  if (indexOfLastPost > data.length) {
    currentPosts = data.slice(0, data.length - indexOfFirstPost)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    data.userId = user.id
    console.log(data)
  }
  return (
    <Container>
      <div className="flex">
        <div className="items-center flex">
          <h2 className="text-2xl font-semibold">Post Pool</h2>
        </div>
        <div className="ml-auto">
          <label
            className="btn btn-warning text-2xl"
            onClick={() => setCreatePost(!createPost)}
          >
            +
          </label>
        </div>
        <div
          className={`modal backdrop-blur-sm ${createPost ? 'modal-open' : ''}`}
        >
          <div className="modal-box max-w-5xl bg-white divide-y-2 divide-line">
            <h2 className="text-2xl font-semibold mb-5">Create Post</h2>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-5 space-y-5"
              >
                <Select
                  id={'stall'}
                  label={'ชื่อร้าน'}
                  options={[
                    { name: 'เลือกร้านอาหาร', value: '' },
                    { name: 'API', value: '1' },
                  ]}
                  register={register('stallId')}
                  error={errors.stallId?.message}
                />
                <Input
                  id={'menuName'}
                  label={'ชื่อเมนู'}
                  placeholder={'ชื่อเมนู'}
                  register={register('menuName')}
                  error={errors.menuName?.message}
                />
                <Select
                  id={'typePost'}
                  label={'ประเภทคำสั่งซื้อ'}
                  options={[
                    { name: 'เลือกประเภทคำสั่งซื้อ', value: '' },
                    { name: 'API', value: '1' },
                  ]}
                  register={register('typePost')}
                  error={errors.typePost?.message}
                />
                <Input
                  id={'location'}
                  label={'สถานที่จัดส่ง'}
                  placeholder={'สถานที่จัดส่ง'}
                  register={register('location')}
                  error={errors.location?.message}
                />
                <Input
                  id={'limitOrder'}
                  type="number"
                  label={'จำนวนที่รับฝาก'}
                  placeholder={'จำนวนที่รับฝาก'}
                  register={register('limitOrder')}
                  error={errors.limitOrder?.message}
                />
                <Input
                  id={'description'}
                  label={'อื่นๆ'}
                  placeholder={'อื่นๆ'}
                  register={register('description')}
                  error={errors.description?.message}
                />
                <div className="w-full flex space-x-2 justify-end">
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-error"
                    onClick={() => setCreatePost(!createPost)}
                  >
                    Discard
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-wrap md:flex-row flex-col justify-center md:py-10 py-3">
        {currentPosts.reverse().map((data) => (
          <Card name={data.id} user={user.id} />
        ))}
      </div>
      <div className="pagination pt-10">
        <Pagination
          postPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={(pageNumber) => setCurrentPage(pageNumber + 1)}
        />
      </div>
    </Container>
  )
}

export default Home
