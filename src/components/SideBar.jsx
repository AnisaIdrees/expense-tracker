
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HiChartBar } from "react-icons/hi";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    fixed top-3 left-3 z-50 
                    md:hidden  /* Hide on desktop */
                    p-2 rounded-md 
                    bg-slate-700 text-white
                    focus:outline-none
                    text-[aqua]
                    text-[20px]
                    
                `}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Sidebar */}
            <div className={` sidebar 
                fixed top-0 left-0 h-full w-63 bg-[#303232] p-9
                transform transition-all duration-1000 ease-in-out z-40
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                shadow-xl
            `}>
                <h1 className='text-xl text-[26px] uppercase text-white font-bold mb-4 pl-4 tracking-wide '><HiChartBar className='text-[aqua]' /> Expe<span className='text-[aqua]'>nsio</span></h1>
                <hr className='border-gray-600 mb-5' />

                <ul className="space-y-3">
                    <li>
                        <NavLink
                            to={'/'}
                            className="flex items-center p-2 text-[aqua] rounded-lg dark:text-white hover:bg-aqua-100 dark:hover:bg-aqua-900 group"
                        >
                            <svg
                                className="w-5 h-5 text-[aqua] transition duration-75 dark:text-gray-400 group-hover:text-aqua-600 dark:group-hover:text-aqua-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 21"
                            >
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ms-3  isActive{}">Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={'/add-income'}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-aqua-100 dark:hover:bg-aqua-900 group"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-aqua-600 dark:group-hover:text-aqua-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                            </svg>
                            <span className="ms-3 group-hover:text-aqua-600 dark:group-hover:text-aqua-400">Add Income</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={'/add-Expense'}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-aqua-100 dark:hover:bg-aqua-900 group"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-aqua-600 dark:group-hover:text-aqua-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                            </svg>
                            <span className="ms-3 group-hover:text-aqua-600 dark:group-hover:text-aqua-400">Add Expense</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={'/Transaction-list'}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-aqua-100 dark:hover:bg-aqua-900 group"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-aqua-600 dark:group-hover:text-aqua-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                            >
                                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                            </svg>
                            <span className="ms-3 group-hover:text-aqua-600 dark:group-hover:text-aqua-400">Transaction List</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={'/login'}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-aqua-100 dark:hover:bg-aqua-900 group"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-aqua-600 dark:group-hover:text-aqua-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <span className="ms-3 group-hover:text-aqua-600 dark:group-hover:text-aqua-400">Login</span>
                        </NavLink>
                    </li>

                    <li>
                        <button
                            onClick={handleLogout}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-aqua-100 dark:hover:bg-aqua-900 group"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-aqua-600 dark:group-hover:text-aqua-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                                />
                            </svg>
                            <span className="ms-3 group-hover:text-aqua-600 dark:group-hover:text-aqua-400">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[ #3b3535] bg-opacity-1 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}

export default SideBar;
