import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteBlog } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";

const SingleBlog = () => {

    const dispatch = useDispatch()
  const  {id}  = useParams();
  const navigate=useNavigate()
  const {status}= useSelector((state)=>state.blog)

  const [blog, setBlog] = useState({}); //i want object in useState so {}

//for fetching the form data in single blog page i.e the page that opens after card from hoome page is clicked

  const fetchBlog = async () => {
  
    const response = await axios.get(`https://react30.onrender.com/api/user/blog/${id}`);
    if (response.status === 200) {
        if (response.status === 200) {
            setBlog(response.data.data);
          }
      }
  };

  const deletetheBlog=()=>{

   dispatch(deleteBlog(id) )
console.log(status)
  
   if (status === STATUSES.SUCCESS){
    
    navigate("/");
  }
  else{
    alert("You are not the Author !!")
  }
   
  
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <Layout>
      <div class="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={blog.imageUrl}
                  alt="Product Image"
                />
              </div>
              <div class="flex -mx-2 mb-4">
                <div class="w-1/2 px-2">
                  <Link to={`/blog/edit/${blog._id}`}>
                    <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Edit
                    </button>
                  </Link>
                </div>
                <div class="w-1/2 px-2">
                  <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deletetheBlog}>
                    Delete
                  </button>
                </div>
                <div class="w-1/2 px-2 ">
                <Link to="/">
                  <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" >
                   Home
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
               Title: {blog.title}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              SubTitle: {blog.subtitle}
              </p>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Category:
                  </span>
                  <span class="text-gray-600 dark:text-gray-300">{blog.category}</span>
                </div>
                {/* <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    Published At:
                  </span>
                  <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                </div> */}
              </div>

              <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
