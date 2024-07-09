import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Form = ({type,onSubmit,user}) => {
    const [data,setData] = useState({   //Note that the useState keys (email,password etc)must  be equivalent to name in input fields

        email : '', 
        username : '',
        password : ''
    })
    const handleChange = (e)=>{
        // const {name,value} = e.target 
        const name=e.target.name
        const value=e.target.value

        // if(name==username&& value.length<4)
        //     {
        //         alert("Name must be at least 4 characters")
        //     }
        //     if(name==password&& value.length<4)
        //         {
        //             alert("Password must be at least 6 characters")
        //         }

        setData({
            ...data,
            [name] : value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmit(data)
    }
  return (
    <div className="min-h-screen bg-gradient-to-l from-blue-300 to-blue-600 transform py-6 flex flex-col justify-center sm:py-12 shadow-2xl">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            className="absolute inset-0 0 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-2xl font-semibold font-mono text-center">
                        { type === 'Login' ? 'LOGIN' : 'REGISTER' }
                    </h1>
                </div>
               
                <br/>
               {type==='Login' && (<h1 className="text-md font-mono ">Hello {user?.username || "User !!"}</h1>)} 
               
         <form onSubmit={handleSubmit}>
         <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                            <input autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 font-mono " placeholder="Email address" onChange={handleChange} required />
                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-mono " >Email Address</label>
                        </div>
                   {
                    type === 'Register' && (
                        <div className="relative">
                        <input autoComplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 font-mono " placeholder="username address" onChange={handleChange} required pattern=".{4,}" />
                        <label htmlFor="useranme" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-md font-mono ">Username</label>
                    </div>
                    )
                   }
                        <div className="relative">
                            <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handleChange} required font-mono pattern=".{6,}"/>
                            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-mono ">Password (Minimum Length:6)</label>
                        </div>
                        <div className="relative">
                            <button className="bg-blue-500 text-white rounded-md px-2 py-1 font-mono ">Submit</button>
                        </div>
                    </div>
                </div>
                {
                    type === 'Register' ? (

                        //use <> </> tag if more than one element in ternanry operator condition?True:False
                        <>
                        <span className="text-black font-mono " >Already Registered? </span>
                   <Link to='/login' style={{color:'blue'}} className='font-mono '> Go to login</Link>

                        </>
                    ) : (
                        <> 
                        <span className="text-black font-mono " >Not Registered? </span> 
                        <Link to='/register' style={{color:'blue'}}  className='font-mono '> Go to register</Link>

                        </>

                    )
                }
         </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Form