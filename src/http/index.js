import axios from "axios";

const API=axios.create({
      baseURL: 'https://react30.onrender.com/api/user/',
      headers:{
            "Content-Type":'application/json', //for the textual format

            // "Content-Type":'multipart/form-data', //for multimedia like photos in blog
            "Accept":'application/json',
            Authorization: localStorage.getItem("token"),
            
      }
})

export default API