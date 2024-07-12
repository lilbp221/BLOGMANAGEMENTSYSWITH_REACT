import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { editBlog } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";
import { setStatus } from "../../../store/authSlice";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.blog);
  console.log(status);

  // console.log(id)

  const handleEdit = async (data) => {
    dispatch(editBlog(data, id));
    if (status == STATUSES.SUCCESS) {
          navigate(`/blogs/${id}`);
          dispatch(setStatus(STATUSES.LOADING));
        }
  };

  // useEffect(() => {
  //   if (status == STATUSES.SUCCESS) {
  //     navigate(`/blogs/${id}`);
  //     dispatch(setStatus(STATUSES.LOADING));
  //   }
  // }, [status,dispatch,navigate]);

  return (
    <Layout>
      <Form type="Edit" onSubmit={handleEdit} />
    </Layout>
  );
};

export default EditBlog;
