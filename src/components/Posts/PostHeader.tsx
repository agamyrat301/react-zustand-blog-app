import { Link } from "react-router-dom";

const PostHeader = ({post}) => {
  return (
    <div className="flex p-4">
    <div>
      <img
        className="w-10 h-10 rounded-full"
        src="https://picsum.photos/200/300"
        alt=""
      />
    </div>

    <div className="ml-3">
      <span className="font-medium text-gray-800">
        {" "}
        {post.user?.username}{" "}
      </span>

      <span className="ml-3 text-sm font-medium text-gray-400">
         {post.created_at}
      </span>
    </div>
  </div>
  )
}

export default PostHeader