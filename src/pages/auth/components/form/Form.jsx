import React, { useState } from "react";
import { Link } from "react-router-dom";
const Form = ({ type, onSubmit, user }) => {
  const [data, setData] = useState({
    //Note that the useState keys (email,password etc)must  be equivalent to name in input fields

    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    // const {name,value} = e.target
    const name = e.target.name;
    const value = e.target.value;

    // if(name==username&& value.length<4)
    //     {
    //         alert("Name must be at least 4 characters")
    //     }
    //     if(name==password&& value.length<4)
    //         {
    //             alert("Password must be at least 6 characters")
    //         }

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  return (
    <div className="min-h-screen bg-gradient-to-l from-blue-300 to-blue-600 transform py-6 flex flex-col justify-center sm:py-12 shadow-2xl md:mx-auto ">
      <div className="relative py-5 px-3 px-auto sm:max-w-2xl sm:mx-auto md:mx-auto lg:mx-auto  ">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl rounded-xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold font-mono text-center">
                {type === "Login" ? "LOGIN" : "REGISTER"}
              </h1>
            </div>

            <br />
            {type === "Login" && (
              <h1 className="text-md font-mono ">
                Hello {user?.username || "User !!"}
              </h1>
            )}

            <form onSubmit={handleSubmit}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 font-mono "
                      placeholder="Email address"
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-mono "
                    >
                      Email Address
                    </label>
                  </div>
                  {type === "Register" && (
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="username"
                        name="username"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 font-mono "
                        placeholder="username address"
                        onChange={handleChange}
                        required
                        pattern=".{4,}"
                      />
                      <label
                        htmlFor="useranme"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-md font-mono "
                      >
                        Username
                      </label>
                    </div>
                  )}
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                      font-mono
                      pattern=".{5,}"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-mono "
                    >
                      Password (Minimum Length:5)
                    </label>
                  </div>
                  {type === "Login" && (
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                      <label
                        for="remember"
                        class="ms-2 text-sm font-medium text-gray-900"
                      >
                        I accept all the terms and conditions
                      </label>
                    </div>
                  )}

                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1 font-mono ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {type === "Register" ? (
                //use <> </> tag if more than one element in ternanry operator condition?True:False
                <>
                  <span className="text-black font-mono ">
                    Already Registered?{" "}
                  </span>
                  <Link
                    to="/login"
                    style={{ color: "blue" }}
                    className="font-mono "
                  >
                    {" "}
                    Go to login
                  </Link>
                </>
              ) : (
                <>
                  <span className="text-black font-mono ">
                    Not Registered?{" "}
                  </span>
                  <Link
                    to="/register"
                    style={{ color: "blue" }}
                    className="font-mono "
                  >
                    {" "}
                    Go to register
                  </Link>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      {/* <footer >
      <div class="w-full mx-auto max-w-screen-xl p-4 flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-900 sm:text-center">© 2024 <a href="#" class="hover:underline">Blogbook</a>. All Rights Reserved.
    </span>
    
    <span class="text-sm text-gray-900 sm:text-center me-2">Developed By: Binod Pokhrel
    </span>
    
    </div>
      </footer> */}
      <footer >
  <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col sm:flex-row items-center justify-between">
    <span class="text-sm text-gray-900 sm:text-center mb-2 sm:mb-0">© 2024 <a href="#" class="hover:underline">Blogbook</a>. All Rights Reserved.</span>
    <span class="text-sm text-gray-900 sm:text-center">Developed By: Binod Pokhrel</span>
  </div>
</footer>

    </div>
  );
};

export default Form;
