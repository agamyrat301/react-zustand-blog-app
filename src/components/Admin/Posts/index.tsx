import React, { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";
import ReactPaginate from 'react-paginate'
import './pagination.css';
import { SelectedItem } from 'react-paginate';


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchData = async (page = 1) => {
        try {
            const response = await axiosInstance.get(`/posts?page=${page}`);
            setPosts(response.data.data);            // Set table data
            setPageCount(response.data.meta.last_page);   // Set total page count
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

  useEffect(() => {
    fetchData(currentPage + 1); // Fetch initial data
  }, [currentPage]);

  const handlePageClick = (event: SelectedItem) => {
    setCurrentPage(event.selected); // Update page on click
};


  return (
    <>
      <main>
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5  ">
          <div className="w-full mb-1">
            <div className="mb-4">
              Posts
              <h1 className="text-xl sm:text-2xl ">Posts</h1>
            </div>
            <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 ">
              <div className="flex items-center mb-4 sm:mb-0">
                <form className="sm:pr-3" action="#" method="GET">
                  <label htmlFor="products-search" className="sr-only">
                    Search
                  </label>
                  <div className="w-48 mt-1 sm:w-64 xl:w-96">
                    <input
                      type="text"
                      v-model="query"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Search for Countries"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table
                  className="min-w-full divide-y divide-gray-200 table-fixed "
                >
                  <thead className="bg-gray-100 ">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-all"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800  "
                          />
                          <label htmlFor="checkbox-all" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                      >
                        #
                      </th>

                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                      >
                        title
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                      >
                        view count
                      </th>

                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                      >
                        owner
                      </th>

                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                      >
                        created_at
                      </th>

                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {posts.map((post, key) => {
                      return (
                        <tr className="hover:bg-gray-100">
                          <td className="w-4 p-4" key={key}>
                            <div className="flex items-center">
                              <input
                                id="checkbox-623378"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800  "
                              />
                              <label
                                htmlFor="checkbox-623378"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>

                          <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                            {post.id}
                          </td>

                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                            {post.title}
                          </td>

                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                          {post.view_count}
                          </td>

                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                            {post.user?.name}
                          </td>

                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                          {post.created_at}
                          </td>

                          <td className="p-4 space-x-2 whitespace-nowrap">
                            <button
                              type="button"
                              className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-primary-800"
                            >
                              Update
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Posts;
