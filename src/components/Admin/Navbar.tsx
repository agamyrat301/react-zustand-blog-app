import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
        <div className="p-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                    <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar"
                        className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg id="toggleSidebarMobileClose" className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <Link to="/admin/dashboard" className="flex ml-2 md:mr-24">
                        Admin Dashboard
                    </Link>

                </div>
                <div className="flex items-center">
                    <div className="hidden mr-3 -mb-1 sm:block">
                        <span></span>
                    </div>

                    <button id="toggleSidebarMobileSearch" type="button"
                        className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Search</span>

                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>

                    <button 
                        className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 ">
                        <span className="sr-only">View notifications</span>

                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                            </path>
                        </svg>
                    </button>

                    <div v-if="NotificationsDropdownIsOpen"
                        className="z-50 absolute  right-0 top-10 max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y shadow-lg divide-gray-100 rounded"
                        data-popper-placement="bottom">
                        <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50">
                            Notifications
                        </div>
                        <div>
                            <a href="#" className="flex px-4 py-3 border-b hover:bg-gray-100">
                                <div className="flex-shrink-0">
                                    <img className="rounded-full w-11 h-11"
                                        src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png"
                                        alt="Jese image" />
                                    <div
                                        className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-primary-700 dark:border-gray-700">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                            </path>
                                            <path
                                                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full pl-3">
                                    <div className="text-gray-500 font-normal text-sm mb-1.5">New message
                                        from <span className="font-semibold text-gray-900 ">Bonnie Green</span>:
                                        "Hey, what's up? All set for the presentation?"</div>
                                    <div className="text-xs font-medium text-primary-700 dark:text-primary-400">a few moments
                                        ago</div>
                                </div>
                            </a>
                            <a href="#" className="flex px-4 py-3 border-b hover:bg-gray-100">
                                <div className="flex-shrink-0">
                                    <img className="rounded-full w-11 h-11"
                                        src="https://flowbite-admin-dashboard.vercel.app/images/users/jese-leos.png"
                                        alt="Jese image" />
                                    <div
                                        className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full pl-3">
                                    <div className="text-gray-500 font-normal text-sm mb-1.5 "><span
                                            className="font-semibold text-gray-900 ">Jese leos</span> and <span
                                            className="font-medium text-gray-900 ">5 others</span> started
                                        following you.</div>
                                    <div className="text-xs font-medium text-primary-700">10 minutes ago
                                    </div>
                                </div>
                            </a>

                        </div>
                        <a href="#"
                            className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100">
                            <div className="inline-flex items-center ">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                    <path fill-rule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                View all
                            </div>
                        </a>
                    </div>

                    <button type="button" className="hidden p-2 text-gray-500 rounded-lg sm:flex hover:bg-gray-100">
                        <span className="sr-only">View notifications</span>

                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                            </path>
                        </svg>
                    </button>

                    <div className="z-50 max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600 hidden"
                        id="apps-dropdown"
                        data-popper-placement="bottom">
                        <div
                            className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 ">
                            Apps
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 p-4">
                           
                        </div>
                    </div>

                    <div className="flex items-center ml-3">
                        <div>
                            <button type="button" 
                                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
                                    alt="user photo" />
                            </button>
                        </div>

                        <div v-if="AuthDropdownIsOpen"
                            className="z-50 absolute m-0 right-0 top-10 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                            data-popper-placement="bottom">
                            <div className="px-4 py-3" role="none">
                                <p className="text-sm text-gray-900 " role="none">
                                    Admin User
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate " role="none">
                                    admin@gmail.com
                                </p>
                            </div>
                            <ul className="py-1" role="none">
                                
                                <li className="w-full">
                                    <button  className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem">Sign out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</nav>
  )
}

export default Navbar