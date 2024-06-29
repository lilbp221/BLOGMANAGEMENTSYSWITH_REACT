import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "../src/globals/status/statuses";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogData: {}, //empty object
    status: null,
  },
  reducers: {
    setblogData(state, action) {
      state.blogData = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  }
});

const {setblogData,setStatus} = blogSlice.actions
export default blogSlice.reducer


export function createBlog(data){
    return  async function createBlogThunk(dispatch){
      dispatch(setStatus(STATUSES.LOADING))

try {
      const response= await axios.post('https://react30.onrender.com/api/user/blog',data,{
            headers: {
              "Content-Type": "multipart/form-data", //for accepting multimedia data
              Authorization: localStorage.getItem("token"),
            } })

            if (response.status === 201) {
                  dispatch(setblogData(data))
                  dispatch(setStatus(STATUSES.SUCCESS))
                  
            } else {
                  dispatch(setStatus(STATUSES.ERROR))
                  
            }
} catch (error) {
      dispatch(setStatus(STATUSES.ERROR))
      
}

      }
}