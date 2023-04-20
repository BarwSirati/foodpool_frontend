import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
import Head from '../components/Head'
import Pagination from '../components/Pagination'

const Home = () => {
  const [createPost, setCreatePost] = useState(false)
  
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(res.data)
    }

    fetchDatas()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  let currentPosts = data.slice(data.length-indexOfLastPost, data.length-indexOfFirstPost)
  if (indexOfLastPost > data.length) {
    currentPosts = data.slice(0, data.length-indexOfFirstPost)
  }



  return (
    <div>
      <Navbar />
      <div className="flex justify-center ">
        <div className=" bg-white px-10 py-10">
          <div className=" relative">
            <Head text={'Post Pool'} />
            <button
              className="text-5xl bg-yellow-400 px-3 text-white rounded-lg absolute top-0 right-0"
              onClick={() => setCreatePost(true)}
            >
              +
            </button>
          </div>
          <div className="grid grid-cols-3 gap-20 pt-8">
            {currentPosts.map((data) => (
              <Card name={data.id} />
            ))}
          </div>
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={(pageNumber) => setCurrentPage(pageNumber+1)}
          />
        </div>
      </div>
      <Post isVisible={createPost} onClose={() => setCreatePost(false)} />
    </div>
  )
}

export default Home
