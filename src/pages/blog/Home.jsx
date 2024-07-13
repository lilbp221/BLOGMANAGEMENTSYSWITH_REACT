import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";
import { setStatus } from "../../../store/authSlice";
import Spinner from "../auth/components/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.blog);

  console.log(data);
  console.log(status);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  return (
    <Layout>
      {status === STATUSES.LOADING && 
      <Spinner />
      }

      <div className="flex flex-wrap justify-center w-full space-x-5 mt-6">
        {data.length > 0 &&
          data.map((blog) => {
            //higher order functoin like map() only works with array

            return <Card blog={blog} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
