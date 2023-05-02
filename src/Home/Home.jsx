import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Container from '../components/Container'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import { getPost } from '../services/post.service'
import { getStall } from '../services/stall.service'
import Header from '../components/Header'
import CreatePost from './CreatePost'
import { useForm } from 'react-hook-form'
// import Search from './Search'

const Home = () => {
  const [createPost, setCreatePost] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [postData, setpostData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [Search, setSearch] = useState('')
  const [SearchStall, setSearchStall] = useState('')
  const [stallData, setStallData] = useState([])
  const [windowSize, SetWindowSize] = useState(window.innerWidth)
  let postsPerPage = 9
  if (windowSize < 1280) {
    postsPerPage = 8
  }

  const { user } = useAuth()
  const { register, getValues, setValue } = useForm()

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true)
      const res = await getPost()
      setpostData(res)
      setIsLoading(false)
    }

    const fetchStalls = async () => {
      const stall = await getStall()
      setStallData(stall)
    }

    fetchStalls()

    fetchPost()

    const handleWindowResize = () => {
      SetWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const postfilter = postData
    .filter((item) => {
      return Search.toLowerCase() === ''
        ? item
        : item.menuName.toLowerCase().includes(Search)
    })
    .filter((item) => {
      return SearchStall.toLowerCase() == ''
        ? item
        : item.stall.name.toLowerCase().includes(SearchStall)
    })
  const currentPosts = postfilter.slice(indexOfFirstPost, indexOfLastPost)

  const showSearch = (e) => {
    setSearch(e.target.value)
    console.log(Search)
  }

  const resetSearch = () => {
    setValue('search', '')
    setSearch('')
  }

  const showStall = (e) => {
    setSearchStall(e.currentTarget.value)
  }

  return (
    <>
      <Header />
      <Container>
        <div className="flex md:px-10 mb-10">
          <div className="items-center flex md:flex-row flex-col md:space-y-0 space-y-5 w-full justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold">Post Pool</h2>
              <CreatePost
                onClose={() => setCreatePost(!createPost)}
                user={user}
                state={createPost}
              />
            </div>
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                id="search"
                autoComplete="off"
                className="bg-gray-200 focus:bg-white border-gray-200 border-2 rounded-full pl-4 pr-7 h-10 transition-colors focus:outline-none w-5/6 md:w-full"
                placeholder="Search..."
                {...register('search')}
                onChange={(e) => showSearch(e)}
              />
              <label
                className={`${
                  Search == '' ? 'invisible' : ''
                }  absolute top-2 z-50 right-3`}
                onClick={() => resetSearch()}
              >
                X
              </label>
            </div>
            <select
              id="stall"
              defaultValue={''}
              className="bg-gray-200 rounded-xl select select-sm"
              {...register('searchStall')}
              onChange={(e) => setSearchStall(e.target.value)}
            >
              <option id="" value="">
                เลือกร้านอาหาร
              </option>
              {stallData.map((stall) => (
                <option value={stall.name} key={stall.id}>
                  {stall.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex md:flex-wrap md:flex-row flex-col justify-center md:py-10 py-3">
          {isloading ? (
            <h1 className="text-3xl font-semibold">Loading</h1>
          ) : postData.length < 1 ? (
            'ยังไม่มี Post'
          ) : currentPosts.length < 1 ? (
            'Not found'
          ) : (
            currentPosts.map((data) => (
              <Card
                owner={data.user.name + ' ' + data.user.lastname}
                menuName={data.menuName}
                stallName={data.stall.name}
                limitOrder={data.limitOrder}
                type={data.typePost}
                location={data.location}
                post={data}
                user={user}
                countOrder={data.countOrder}
                refresh={() => setRefresh(true)}
                key={data.id}
              />
            ))
          )}
        </div>
        <div className="pagination pt-10">
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={postfilter.length}
            paginate={(pageNumber) => setCurrentPage(pageNumber + 1)}
          />
        </div>
      </Container>
    </>
  )
}

export default Home
