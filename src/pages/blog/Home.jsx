import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";
import { setStatus } from "../../../store/authSlice";
import Spinner from "../auth/components/Spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowUp, faHouse } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.blog);

  console.log(data);
  console.log(status);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <Layout> 
    
    <div className="flex justify-end">
    <button  className="
    w-30 h-10 bg-gradient-to-r from-teal-400 to-teal-600 
    hover:from-teal-600 hover:to-teal-800 
    text-white rounded-lg shadow-lg text-sm m-3 p-3 
    transition-all duration-300 transform hover:scale-105 
    sm:w-20 sm:h-8 sm:text-base flex items-center justify-center 
  " onClick={handleScrollToBottom} ><FontAwesomeIcon icon={faAngleDown} /></button>

    </div>
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
          
      <div className="flex justify-end">
      <button className="
    w-30 h-10 bg-gradient-to-r from-teal-400 to-teal-600 
    hover:from-teal-600 hover:to-teal-800 
    text-white rounded-lg shadow-lg text-sm m-3 p-3 
    transition-all duration-300 transform hover:scale-105 
    sm:w-20 sm:h-8 sm:text-base flex items-center justify-center 
  "onClick={handleScrollToTop} ><FontAwesomeIcon icon={faAngleUp} /></button>

      </div>
    </Layout>
  );
};

export default Home;
