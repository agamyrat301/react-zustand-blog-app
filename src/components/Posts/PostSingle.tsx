import React from "react";
import PostHeader from "./PostHeader";

const PostSingle = ({post}) => {
  const images = [
    
  ];
  return (
    <div className="hover:bg-gray-100 dark:hover:bg-dim-300">
      <PostHeader post={post} />

      <div className="ml-2 mt-4">
        <p className="flex-shrink w-auto font-medium text-gray-800  text-2xl">
          {post.title}
        </p>

        {images.map((image) => (
          <div className="flex my-3 mr-2 border-2 rounded-2xl">
            <img
              className="w-full rounded-2xl"
              key={image.id}
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostSingle;
