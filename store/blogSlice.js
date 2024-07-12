import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";
import { useParams } from "react-router-dom";

const blogSlice = createSlice({

  name: "blog",
  initialState: {
   data: [] , //empty object //higher order functoin like map() only works with array
    status: null,
  },
  reducers: {
    setBlog(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});


const { setBlog, setStatus } = blogSlice.actions;
export default blogSlice.reducer;

//thunk for api hitting while creating a blog
export function createBlog(data) {
  return async function createBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      const response = await axios.post(
        "https://react30.onrender.com/api/user/blog",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", //for accepting multimedia data
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 201) {
        // dispatch(setblogData(data)); we dont need single blog data
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

//thunk for api hitting while fetching a blog
export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      const response = await axios.get(`https://react30.onrender.com/api/user/blog`
      
      );

      if (response.status === 200 && response.data.data.length>0) {
        dispatch(setStatus(STATUSES.SUCCESS));
        dispatch(setBlog(response.data.data)) //setblogData(input data)
        console.log(response.data.data)

      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

//thunk for api hitting while deleting a blog
export function deleteBlog(id) {

  return async function deleteBlogThunk(dispatch) {

    dispatch(setStatus(STATUSES.LOADING));

    try {
      const response = await API.delete(`blog/${id}`, {
        headers: {
        Authorization:localStorage.getItem("token")
        },
      });

      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {

      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}


export function editBlog(data,id){
  return async function(dispatch){
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.patch(`https://react30.onrender.com/api/user/blog/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        dispatch(setStatus(STATUSES.SUCCESS));

        // navigate(`/blogs/${data._id}`); // Redirect to the updated blog page
      } else {
        dispatch(setStatus(STATUSES.ERROR));


      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));

    }
  }
}