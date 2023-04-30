import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Container from '../components/Container'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import { getPost } from '../services/post.service'
import Header from '../components/Header'
import CreatePost from './CreatePost'


const Home = () => {
  const [createPost, setCreatePost] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const [postData, setpostData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
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
    console.log(user.point)

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
  let currentPosts = postData.slice(
    postData.length - indexOfLastPost,
    postData.length - indexOfFirstPost
  )
  if (indexOfLastPost > postData.length) {
    currentPosts = postData.slice(0, postData.length - indexOfFirstPost)
  }

  return (
    <>
      <Header />
      <Container>
        <div className="flex md:px-10 mb-10">
          <div className="items-center flex">
            <h2 className="text-2xl font-semibold">Post Pool</h2>
          </div>
          <CreatePost
            onClose={() => setCreatePost(!createPost)}
            user={user}
            state={createPost}
          />
        </div>
        <div className="flex md:flex-wrap md:flex-row flex-col justify-center md:py-10 py-3">
          {isloading ? (
            <h1 className="text-3xl font-semibold">Loading</h1>
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
            totalPosts={postData.length}
            paginate={(pageNumber) => setCurrentPage(pageNumber + 1)}
          />
        </div>
      </Container>
    </>
  )
}

export default Home
