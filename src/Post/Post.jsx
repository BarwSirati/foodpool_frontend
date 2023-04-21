import React from 'react'
import axios from 'axios'

import PostList from './PostList'
import Container from '../components/Container'

const Post = () => {
    
    // useEffect(() => {
    //     try {
    //         axios.get(url)
    //             .then((res) => {
    //                 setOrder(res)
    //                 console.log(res)
    //             })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [])

    return (
        <Container>
            <h2 className="text-2xl font-semibold">My post history</h2>
            <div className="pt-5 space-y-4">
                <PostList />
                <PostList />
            </div>
        </Container>
    )
}

export default Post