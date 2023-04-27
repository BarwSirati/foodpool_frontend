import React, { useEffect, useState } from 'react'

import { useAuth } from '../contexts/AuthContext'
import PostList from './PostList'
import Container from '../components/Container'

import { getPostByUserId } from '../services/post.service'

const Post = () => {
  const [isloading, setIsLoading] = useState(false)
  const [postData, setPostData] = useState([])

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

  return (
    <Container>
      <h2 className="text-2xl font-semibold">My post history</h2>
      <div className="pt-5 space-y-4">
        {isloading ? (
          <h1 className="text-3xl font-semibold">Loading</h1>
        ) : (
          postData.map((data) => {
            return (
                <PostList />
            )
          })
        )}
      </div>
    </Container>
  )
}

export default Post
