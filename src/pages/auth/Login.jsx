import React, { useEffect } from "react";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../globals/status/statuses";
import { login, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const status = useSelector((state) => state.auth.status);
console.log(status)
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (data) => {

    dispatch(login(data));
    if (status === STATUSES.SUCCESS) {
      alert("Login successful!")
      navigate("/");
    }
   
  };

  // useEffect(() => {
  
  // }, [status]);

  // console.log(user)
  return <Form type="Login" user={user} onSubmit={handleLogin} />;
};

export default Login;
