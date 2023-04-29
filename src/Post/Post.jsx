import React, { useEffect, useState } from 'react'

import { useAuth } from '../contexts/AuthContext'
import PostList from './PostList'
import Container from '../components/Container'
import Pagination from '../components/Pagination'

import { getPostByUserId } from '../services/post.service'

const Post = () => {
  const [isloading, setIsLoading] = useState(false)
  const [postData, setPostData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  let postsPerPage = 8

  const { user } = useAuth()

  useEffect(() => {
    const getPostByUser = async () => {
      setIsLoading(true)
      const res = await getPostByUserId(user.id)
      setPostData(res)
      setIsLoading(false)
    }
    getPostByUser()
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

  // console.log(postData.length)

  return (
    <Container>
      <h2 className="text-2xl font-semibold">My post history</h2>
      <div className="pt-5 space-y-4">
        {isloading ? (
          <h1 className="text-3xl font-semibold">Loading</h1>
        ) : (
          currentPosts.map((data) => {
            return (
                <PostList 
                  key = {data.id}
                  user = {data.user}
                  stall = {data.stall}
                  location = {data.location}
                  menu = {data.menuName}
                  type = {data.typePost}
                  status = {data.postStatus}
                  id = {data.id}
                />
            )
          })
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
  )
}

export default Post
