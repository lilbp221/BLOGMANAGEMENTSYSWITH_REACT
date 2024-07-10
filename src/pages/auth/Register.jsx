//this class is parent to component <Form/>

import React, { useEffect, useState } from "react";
import Form from "./components/form/Form";
import { register, setStatus } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../globals/status/statuses";
import { Navigate, useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import { TailSpin } from "react-loader-spinner";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status); //returns auth state and stores the status value of auth
  console.log(status);
  const[isRegister,setisRegister]=useState(false)

  const handleRegister = (data) => {
    setisRegister(true)
    dispatch(register(data)); 
    //sends data to the state or container of the authSlice //state
    // console.log(data)
  };

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      dispatch(setStatus(STATUSES.LOADING));
      setisRegister(false) // Reset status to idle
      navigate("/login");
    }
  }, [status, navigate, dispatch]);

  return(
    <div>
    {isRegister && status === STATUSES.LOADING && (
      <TailSpin
        height="80"
        width="80"
        color="blue"
        ariaLabel="loading"
      />
    )}
    <Form type="Register" onSubmit={handleRegister} />
    </div>
    )
};

export default Register;
