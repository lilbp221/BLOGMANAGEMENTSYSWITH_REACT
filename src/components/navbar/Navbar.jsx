import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { setToken } from '../../../store/authSlice'

const Navbar = () => {
const navigate=useNavigate()

const dispatch= useDispatch()
  const {token:user}= useSelector((state)=>state.auth) //GIVES THE VALUE OF TOKEN FROM STATE IN STRING
  const [isLoggedIn,setisLoggedIn] = useState()
  useEffect(() => {
const token=localStorage.getItem('token') //GIVES THE VALUE OF TOKEN FROM LOCAL STORAGE IN STRING

//The double exclamation marks (!!) are used to convert a value to a boolean. it could be a string if a token is stored or null if no token is found

setisLoggedIn(!!token || !!user)
  },[user])
   
  const handleLogout=()=>{
    
    localStorage.removeItem('token');
    setisLoggedIn(false)
    navigate('/')
dispatch(setToken(null))


    
  }


return(
  <nav className=" text-white bg-gray-900 shadow-sm">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvT9uDJ9kV7C3zO6iOt95e24Dtt3QMSncmqLLsuv4KWpeC_Gx6C0AZZpyHQWps4h-Psq8&usqp=CAU" 
        className="h-8 w-8 rounded-full" 
        alt="Blogbook logo" 
      />
      <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white font-mono">Blogbook</span>
    </Link>
    <div className="flex items-center space-x-2 rtl:space-x-reverse mt-4 md:mt-0">
      {isLoggedIn ? (
        <div class="flex items-center justify-center gap-2 " >
          <Link 
            to="/blog/add" 
            className=" flex items-center justify-center py-1 px-2 text-sm md:text-sm lg:text-base bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 font-mono h-10 " 
          >
            Add Blog
          </Link>
          <Link 
            onClick={handleLogout} 
            className=" flex items-center justify-center py-1 px-2 text-sm md:text-sm lg:text-base bg-gradient-to-r from-red-400 to-red-600 hover:from-red-600 hover:to-red-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 font-mono h-10"
          >
            Logout
          </Link>
        </div>
      ) : (
        <div class="flex items-center justify-center gap-2 ">
          <Link 
            to="/register" 
            className=" flex items-center justify-center py-1 px-2 text-sm md:text-sm lg:text-base bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 font-mono  h-10"
          >
            Register
          </Link>
          <Link 
            to="/login" 
            className=" flex items-center justify-center py-1 px-2 text-sm md:text-sm lg:text-base bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 font-mono  h-10"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  </div>
</nav>
)

}

export default Navbar
