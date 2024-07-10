import React, { useEffect, useState } from "react";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../globals/status/statuses";
import { login, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Spinner from "./components/Spinner";

const Login = () => {

  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const handleLogin = (data) => {
    setIsLoggingIn(true);
    dispatch(login(data));

    // if (status === STATUSES.SUCCESS) {
    //   navigate("/");
    // }
  };

  useEffect(() => {
    if (status === STATUSES.SUCCESS) {

      dispatch(setStatus(STATUSES.LOADING))
      setIsLoggingIn(false);
      navigate("/");
    }
  }, [status, navigate,dispatch]);

  // return (
  
  // <Form type="Login" user={user} onSubmit={handleLogin} />)

  return (
    <div>
      {isLoggingIn && status === STATUSES.LOADING && (
        <Spinner/>
      )}
      <Form type="Login" user={user} onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
