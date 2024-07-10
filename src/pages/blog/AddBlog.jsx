import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import blogSlice, { createBlog } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";
import { useNavigate } from "react-router-dom";
import { setStatus } from "../../../store/authSlice";
import { ErrorBoundary } from "react-error-boundary";
import { TailSpin } from "react-loader-spinner";

const AddBlog = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.blog.status);
  const navigate = useNavigate();

  const handleAddblog = (data) => {
    dispatch(createBlog(data));

    if (status === STATUSES.SUCCESS) {
      navigate("/");
    }
  };

  return (
    <Layout>
      <Form type="Create" onSubmit={handleAddblog} />
    </Layout>
  );
};

export default AddBlog;
