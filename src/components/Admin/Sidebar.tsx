import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed top-0 left-0 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
      >
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 ">
              <ul className="pb-2 space-y-2">
                <li>
                  <Link
                    to={`/admin/posts`}
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      >
                        <path d="M44 14L24 4L4 14v20l20 10l20-10V14Z"></path>
                        <path
                          strokeLinecap="round"
                          d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"
                        ></path>
                      </g>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      Posts
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/admin/users`}
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      >
                        <path d="M44 14L24 4L4 14v20l20 10l20-10V14Z"></path>
                        <path
                          strokeLinecap="round"
                          d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"
                        ></path>
                      </g>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      Users
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/admin/categories`}
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      >
                        <path d="M44 14L24 4L4 14v20l20 10l20-10V14Z"></path>
                        <path
                          strokeLinecap="round"
                          d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"
                        ></path>
                      </g>
                    </svg>
                    <span className="ml-3" sidebar-toggle-item="">
                      Categories
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
