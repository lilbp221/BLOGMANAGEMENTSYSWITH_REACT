import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog } from '../../../store/blogSlice'

const Home = () => {
  const dispatch=useDispatch()
  const {data}= useSelector((state) =>state.blog)
  console.log(data)

  useEffect(() => {
    dispatch(fetchBlog())
  },[])

  return (
   <Layout>
  <div className='flex flex-wrap justify-center space-x-5 mt-6'>
   {
 data.map((blog)=>{ //higher order functoin like map() only works with array

   return <Card blog={blog}/>
})
    
   }
    

  </div>
   </Layout>
  )
}

export default Home