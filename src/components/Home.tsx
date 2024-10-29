import React, { useState } from "react";
import Loading from "./Loading";
import PostForm from "./PostForm";

const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="border-x border-white-200 h-screen">
      <div className="sticky top-0  px-4 py-3 bg-white/80 backdrop-blur-md">
        <h2 className="text-xl font-bold text-gray-800">Home</h2>
      </div>
      {loading ? (
        <div className="flex items-center justify-center p-4 border-b">
          <Loading />
        </div>
      ) : (
        <div>
          <PostForm/>
        </div>
      )}
    </div>
  );
};

export default Home;
