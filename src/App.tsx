import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axiosInstance from "./axiosConfig";
import { Post } from "./types/Post";
import { Category } from "./types/Category";
import Left from "./components/Left";
import Right from "./components/Right";
import { useCategoryStore } from "./stores/useCategoryStore";
import PreviewCard from "./components/PreviewCard";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { categories, setCategories } = useCategoryStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make both API calls concurrently
        const [postsResponse, categoriesResponse] = await Promise.all([
          axiosInstance.get("posts"),
          axiosInstance.get("categories"), // Replace with your actual endpoint for categories
        ]);

        // Set state for posts and categories
        setPosts(postsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="min-h-full">
        <div className="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <div className="hidden bg-red-500 md:block xs:col-span-1 xl:col-span-2 ">
            <div className="sticky top-0">
              <Left />
            </div>
          </div>

          <main className="col-span-12 bg-red-500 md:col-span-8 xl:col-span-6">
            dwq
          </main>

          <div className="hidden md:block  xl:col-span-4 md:col-span-3">
            <div className="sticky top-0">
              <Right/>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
