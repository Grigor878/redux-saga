import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const Posts = ({ asyncPosts }) => {
    if (!asyncPosts.length) {
        return (
            <p className='text-center'>We have no posts yet</p>
        )
    }

    return asyncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        asyncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)