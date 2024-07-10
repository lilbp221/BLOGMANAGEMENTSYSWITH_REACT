import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import blogSlice, { createBlog } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";
import { useNavigate } from "react-router-dom";
import { setStatus } from "../../../store/authSlice";
import { TailSpin } from "react-loader-spinner";
import Spinner from "../auth/components/Spinner";

const AddBlog = () => {
  const dispatch = useDispatch();
  const {status} = useSelector((state) => state.blog);
  const navigate = useNavigate();
  const[isLoading,setisLoading]=useState(false)

  console.log(status)
  console.log({isLoading})

  const handleAddblog = (data) => {
    setisLoading(true);
    dispatch(createBlog(data));
  };

  useEffect(()=>{
    if (status === STATUSES.SUCCESS) {
      dispatch(setStatus("STATUSES.LOADING"));
      setisLoading(false)
      navigate("/");
    }
    else{
      setisLoading(false)
 
    }
  },[status,navigate,dispatch])

  return (
    
      
    <Layout>
    <div>
      {isLoading && status === STATUSES.LOADING && (
        <Spinner
        />
      )}
      </div>
      <Form type="Create" onSubmit={handleAddblog} />
    </Layout>
  );
};

export default AddBlog;
