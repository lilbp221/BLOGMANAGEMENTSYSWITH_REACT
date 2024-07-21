import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Form = ({ type, onSubmit }) => {



  const [data, setData] = useState({
    title: "",
    subtitle: "",
    category: "",
    description: "",
    imageUrl: "",
  });
  const { id } = useParams();


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  

  //for updating the values in the form which was previously filled


  const fetchBlog = async () => {
    const response = await axios.get(
      `https://react30.onrender.com/api/user/blog/${id}`
    );
    if (response.status === 200) {
      if (response.status === 200) {
        setData(response.data.data);
      }
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  //for updating the values in the form which was previously filled

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
     console.log(data)
  };

  return (
    <div class="flex justify-center  w-screen h-screen">
      <div class="container my-3 px-4 lg:px-20 ">
        <div class="w-full p-8 my-2 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl mx-25">
          <div class="flex">
            <h1 class="font-bold uppercase text-5xl">
              {type} <br /> Blog
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title*"
                name="title"
                onChange={handleChange}
                value={data.title}
              />

              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subtitle*"
                name="subtitle"
                onChange={handleChange}
                value={data.subtitle}

              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                name="imageUrl"
                onChange={handleChange}
              
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Category*"
                name="category"
                onChange={handleChange}
                value={data.category}

              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Description*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="description"
                onChange={handleChange}
                value={data.description}

              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button
               className="block py-2 px-3 bg-gradient-to-r from-blue-400 to-blue-600 
    hover:from-blue-600 hover:to-blue-800 
    text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full font-mono" aria-current="page"
              >
               {type}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
