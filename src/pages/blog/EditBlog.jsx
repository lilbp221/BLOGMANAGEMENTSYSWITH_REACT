import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBlog = () => {

  const {id}= useParams()
  const navigate = useNavigate();

  
  const handleEdit= async (data)=>{

    try {
      const response = await axios.patch(`https://react30.onrender.com/api/user/blog/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        navigate(`/blogs/${data._id}`); // Redirect to the updated blog page
      } else {
        alert("Failed to update blog");
      }
    } catch (error) {
      alert(error.response.data.message);
    }

  }

  return (
    <Layout>
        <Form type='Edit' onSubmit={handleEdit} />
    </Layout>
  )
}

export default EditBlog