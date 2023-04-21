import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Container from '../components/Container'
import Card from '../components/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import Post from '../components/Post'


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

  return (
    <Container>
      <div className="flex">
        <div className="items-center flex">
          <h2 className="text-2xl font-semibold">Post Pool</h2>
        </div>
        <Post onClose={() => setCreatePost(!createPost)} user={user} state={createPost}/>
      </div>
      <div className="flex md:flex-wrap md:flex-row flex-col justify-center md:py-10 py-3">
        {currentPosts.reverse().map((data) => (
          <Card name={data.id} user={user.id}/>
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
