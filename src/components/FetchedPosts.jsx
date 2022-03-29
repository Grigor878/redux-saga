import React from 'react'
import Post from './Post'

export default function FetchedPost({ posts }) {
    if (!posts.length) {
        return (
            <button className='btn btn-primary'>Download Posts</button>
        )
    }

    return posts.map(post => <Post post={post} key={post} />)
}