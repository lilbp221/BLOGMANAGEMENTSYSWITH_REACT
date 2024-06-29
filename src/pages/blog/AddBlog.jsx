import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import blogSlice, { createBlog } from '../../../store/blogSlice'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'


const AddBlog = () => {
  const dispatch= useDispatch()
  // const status= useSelector((state) => state?.blog?.status)
  const status= useSelector((state) =>state.blog.status )

  console.log(status)

  const navigate=useNavigate()

  const handleAddblog=(data) => {

    dispatch(createBlog(data))
    if(status===STATUSES.SUCCESS)
      {
        navigate('/')
      }
      else{
        navigate('/blog/add')

      }


  }
  return (
  <Layout>
	<Form type='Create' onSubmit={handleAddblog}/>
  </Layout>
  )
}

export default AddBlog