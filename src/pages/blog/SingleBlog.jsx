import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteBlog, setdeleteStatus } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";
import { TailSpin } from "react-loader-spinner";
import Spinner from "../auth/components/Spinner";
import { setStatus } from "../../../store/authSlice";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [isloading, setisLoading] = useState(true);
const {deleteStatus}= useSelector((state)=>state.blog)
  const [blog, setBlog] = useState({}); //i want object in useState so {}
  console.log(deleteStatus)

  //for fetching the form data in single blog page i.e the page that opens after card from hoome page is clicked

  const fetchBlog = async () => {
    const response = await axios.get(
      `https://react30.onrender.com/api/user/blog/${id}`
    );

    if (response.status === 200) {
      setBlog(response.data.data);
      setisLoading(false);

    }
  };

  const deletetheBlog =  () => {
    dispatch(deleteBlog(id));

    if (deleteStatus === STATUSES.SUCCESS) 
      {
        dispatch(setdeleteStatus(STATUSES.LOADING))
      navigate("/");
    } else 
    {
      alert("You may not be allowed to delete this blog. Please retry!");
    }

  };



  useEffect(() => {
    fetchBlog();
  }, [dispatch,navigate]);



  return (
    <Layout>
      <div>{isloading && status === STATUSES.LOADING && <Spinner />}</div>
      <div class="bg-gray-100 dark:bg-gray-800 py-12 h-screen">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[200px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-[200px] object-cover rounded-lg"
                  src={blog.imageUrl}
                  alt="Product Image"
                />
              </div>
              <div class="flex -mx-2 mb-4">
                <div class="w-1/2 px-2">
                  <Link to={`/blog/edit/${blog._id}`}>
                    <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-mono hover:bg-gray-800 dark:hover:bg-gray-700">
                      Edit
                    </button>
                  </Link>
                </div>
                <div class="w-1/2 px-2">
                  <button
                    class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-mono hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={deletetheBlog}
                  >
                    Delete
                  </button>
                </div>
                <div class="w-1/2 px-2 ">
                  <Link to="/">
                    <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-mono hover:bg-gray-300 dark:hover:bg-gray-600">
                      Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-light text-gray-800 dark:text-white mb-2 font-mono">
                Title: {blog.title}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                SubTitle: {blog.subtitle}
              </p>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                    Category:
                  </span>
                  <span class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                    {blog.category}
                  </span>
                </div>
                {/* <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Published At:
                  </span>
                  <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                </div> */}
              </div>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                  Product Description:  
                  </span>
                  <span class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                  {blog.description}
                  </span>
                </div>
              </div> 
               <div class="flex mb-4">
                <div class="mr-4">
                  <span class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                  Author:   
                  </span>
                  <span class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                  {blog?.userId?.username}
                  </span>
                </div>
              </div>

              <div class="flex mb-4">
                <span class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                  Created At:
                </span>
                <span class="text-gray-600 dark:text-gray-300 text-sm mb-4 font-mono">
                {blog?.userId?.createdAt}
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
