import React from 'react'
import { Post as PostType } from '../types/Post'

interface PostProps {
    post: PostType;
}


const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>{post.title}</div>
  )
}

export default Post