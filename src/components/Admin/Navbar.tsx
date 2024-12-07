import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login'); // Redirect to login page after logging out
      };
    

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
                    <Link to="/admin" className="flex ml-2 md:mr-24">
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

                        <div 
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
                                
                                <li className="">
                                    <button onClick={handleLogout} className="px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100"
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