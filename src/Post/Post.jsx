import React, { useEffect, useState } from 'react'

import { useAuth } from '../contexts/AuthContext'
import PostList from './PostList'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import Search from '../components/Search'

import { getPostByUserId } from '../services/post.service'

const Post = () => {
  const [isloading, setIsLoading] = useState(false)
  const [postData, setPostData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [SearchMenu, setSearchMenu] = useState('')
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
  const postfilter = postData
    .filter((item) => {
      return SearchMenu.toLowerCase() === ''
        ? item
        : item.menuName.toLowerCase().includes(SearchMenu) || item.stall.name.toLowerCase().includes(SearchMenu)
    })
  const currentPosts = postfilter.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <Container>
      <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold">My post history</h2>
        <Search
          menu={(menuname) => setSearchMenu(menuname)}
          page={() => setCurrentPage(1)}
        />
      </div>
      <div className="pt-5 space-y-4">
        {isloading ? (
          <h1 className="text-3xl font-semibold">Loading</h1>
        ) : postfilter.length === 0 ? (
          <h1 className="text-3xl font-semibold text-center">No data</h1>
        ) : (
          currentPosts.map((data) => {
            console.log(data)
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
