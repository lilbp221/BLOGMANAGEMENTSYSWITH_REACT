//this class is parent to component <Form/>

import React, { useEffect } from "react";
import Form from "./components/form/Form";
import { register, setStatus } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../globals/status/statuses";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {

    // const State= useSelector((state) =>state ) returns all the states from store
    const navigate= useNavigate()
    const dispatch = useDispatch();

    const status= useSelector((state)=>state.auth.status) //returns auth state and stores the status value of auth
    console.log(status)  

  const handleRegister = (data) => {
    dispatch(register(data)); //sends data to the state or container of the authSlice //state
    // console.log(data)

    //check the status value
    //status --> success --> navigate to login else else to register page!!

 
   
   
  };


  useEffect(()=>{  

    if (status===STATUSES.SUCCESS) 
      {
    navigate('/login');
    console.log(status)
    // dispatch(setStatus(STATUSES.LOADING))



  } else {
    navigate('/register');
    
  }

  },[status])


  return <Form type="Register" onSubmit={handleRegister} />;
};

export default Register;
