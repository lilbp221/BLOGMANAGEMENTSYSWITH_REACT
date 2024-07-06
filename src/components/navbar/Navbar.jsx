import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
const navigate=useNavigate()
  const {token:user}= useSelector((state)=>state.auth) //GIVES THE VALUE OF TOKEN FROM STATE IN STRING
  const [isLoggedIn,setisLoggedIn] = useState(false)
  useEffect(() => {
const token=localStorage.getItem('token') //GIVES THE VALUE OF TOKEN FROM LOCAL STORAGE IN STRING

//The double exclamation marks (!!) are used to convert a value to a boolean. it could be a string if a token is stored or null if no token is found

setisLoggedIn(!!token || !!user)
  },[user])
   
  const handleLogout=()=>{
    
     navigate('/login')
    localStorage.removeItem('token');
    setisLoggedIn(false)
    
  }
  return (
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvT9uDJ9kV7C3zO6iOt95e24Dtt3QMSncmqLLsuv4KWpeC_Gx6C0AZZpyHQWps4h-Psq8&usqp=CAU" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blogbook</span>
  </Link>
  <div className="flex md:order-2">
  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

      {/* if the value of login is false then display CREATE BLOG | REGISTER | LOGIN */}
      
      {/*  The ternary operator in JavaScript SYNTAX::::::  condition ? expressionIfTrue : expressionIfFalse; */}
       {!isLoggedIn?(
        <>
       
        <li>
          <Link to="/register" className="block py-2 px-3 my-1 text-white bg-blue-700 rounded md:bg-blue-700  md:text-white">Register</Link>
        </li>
        <li>
          <Link to="/login" className="block py-2 px-3 my-1 text-white bg-blue-700 rounded md:bg-blue-700  md:text-white">Login</Link>
        </li>
        </>
       ): 
     
       
       (
        <>
        <li>
          <Link to="/blog/add" className="block py-2 px-3 my-1 text-white bg-blue-700 rounded md:bg-blue-700  md:text-white" aria-current="page">Create Blog</Link>
        </li>

        <li>
          <Link onClick={handleLogout} className="block py-2 px-3 text-white bg-pink-700 rounded md:bg-pink-700  md:text-white">Logout</Link>
        </li>
        </>
        )
       
       }
      </ul>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
      </div>
      <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </div>
    
    </div>
  </div>
</nav>

  )
}

export default Navbar