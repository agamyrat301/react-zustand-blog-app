import PostSingle from "./PostSingle";
import { usePostStore } from "../../stores/usePostStore";
import axiosInstance from "../../axiosConfig";
import { useState, useEffect } from "react";
import Spinner1 from "../Spinner1";

const PostsIndex = () => {

    //const { posts, setPosts } = usePostStore();
    //usePostStore

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Fetch initial items
      fetchItems();
    }, []);
  
    useEffect(() => {
      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });

    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`posts?page=${page}`);
        const newItems = response.data.data;
  
        setPosts((prevItems) => [...prevItems, ...newItems]);
        setHasMore(response.data.next_page_url !== null); // Check if there are more pages
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };


    const handleScroll = () => {
      // Check if the user scrolled near the bottom of the page
      if (
        document.body.scrollHeight - 300 <
        window.scrollY + window.innerHeight
      ) {
        if (!loading && hasMore) {
          console.log('HEREEEE')
          setPage((prevPage) => {
            fetchItems(); // Fetch items for the next page
            return prevPage + 1;
          });
        }
      }
    };

   

  return (
    <div className="pb-4 border-b cursor-pointer">
        {posts ?  posts.map((post) => (
           <PostSingle post={post}/>
        )) : 'No posts'}
        {loading && <Spinner1/>}
    </div>
  );
};

export default PostsIndex;
