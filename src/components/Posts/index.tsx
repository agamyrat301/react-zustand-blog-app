import React from "react";
import PostSingle from "./PostSingle";
import { usePostStore } from "../../stores/usePostStore";

const index = () => {
    const posts = usePostStore((state) => state.posts);
    //usePostStore

  return (
    <div className="pb-4 border-b cursor-pointer">
        {posts?.data ?  posts?.data.map((post) => (
           <PostSingle post={post}/>
        )) : ''}
    </div>
  );
};

export default index;
