import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Container from '../components/Container'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import { getPost } from '../services/post.service'
import Header from '../components/Header'
import CreatePost from './CreatePost'
import Search from '../components/Search'
import SearchStall from './SearchStall'

const Home = () => {
  const [createPost, setCreatePost] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [postData, setpostData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [SearchMenu, setSearchMenu] = useState('')
  const [selectStall, setSelectStall] = useState('')
  const [windowSize, SetWindowSize] = useState(window.innerWidth)
  let postsPerPage = 9
  if (windowSize < 1280) {
    postsPerPage = 8
  }

  const { user } = useAuth()

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true)
      const res = await getPost()
      setpostData(res)
      setIsLoading(false)
    }

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
      return SearchMenu.toLowerCase() === ''
        ? item
        : item.menuName.toLowerCase().includes(SearchMenu)
    })
    .filter((item) => {
      return selectStall.toLowerCase() == ''
        ? item
        : item.stall.name.toLowerCase().includes(selectStall)
    })
  const currentPosts = postfilter.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <Header />
      <Container>
        <div className="flex md:px-10 mb-10">
          <div className="items-center flex md:flex-row flex-col max-md:space-y-5 w-full justify-between">
            <div className="flex gap-3">
              <h2 className="text-2xl font-semibold">Post Pool</h2>
              <CreatePost
                onClose={() => setCreatePost(!createPost)}
                user={user}
                state={createPost}
              />
            </div>
            <Search
              menu={(menuname) => setSearchMenu(menuname)}
              page={() => setCurrentPage(1)}
            />
            <SearchStall
              stall={(stall) => setSelectStall(stall)}
              page={() => setCurrentPage(1)}
            />
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
            showpage={currentPage - 1}
          />
        </div>
      </Container>
    </>
  )
}

export default Home
