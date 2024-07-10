import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import SingleBlog from './pages/blog/SingleBlog'
import handleError from './pages/auth/components/handleError'

import {Provider} from 'react-redux'

import store from '../store/store'
import Protected from './Protected'
import DeleteBlog from './pages/blog/DeleteBlog'
// import { ErrorBoundary } from 'react-error-boundary'
function App() {
  return (
   

    <Provider store={store}>
    {/* <ErrorBoundary fallback={<handleError/>}> */}
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Home />} /> 
             <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
             <Route path="/blog/add" element={<Protected><AddBlog /></Protected>} />
             <Route path="/blog/edit/:id" element={<Protected><EditBlog /></Protected>} />
            <Route path="/blogs/:id" element={<Protected> <SingleBlog /></Protected>} />

            
      </Routes>
      </BrowserRouter>
      {/* </ErrorBoundary> */}

    </Provider>
   

  )
}

export default App















// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import handleError from "./pages/auth/components/handleError";

// import { Provider } from "react-redux";
// import { Suspense, lazy } from "react";
// import Spinner from "./pages/auth/components/Spinner";

// import store from "../store/store";
// import Protected from "./Protected";
// // import { ErrorBoundary } from 'react-error-boundary'

// const Home = lazy(() => import("./pages/blog/Home"));
// const Register = lazy(() => import("./pages/auth/Register"));
// const Login = lazy(() => import("./pages/auth/Login"));
// const AddBlog = lazy(() => import("./pages/blog/AddBlog"));
// const EditBlog = lazy(() => import("./pages/blog/EditBlog"));
// const SingleBlog = lazy(() => import("./pages/blog/SingleBlog"));

// import React from "react";
// import { ErrorBoundary } from "react-error-boundary";
// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <ErrorBoundary fallback={<div>Something went wrong</div>}>
//           <Suspense fallback={<Spinner />}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/login" element={<Login />} />
//               <Route
//                 path="/blog/add"
//                 element={
//                   <Protected>
//                     <AddBlog />
//                   </Protected>
//                 }
//               />
//               <Route
//                 path="/blog/edit/:id"
//                 element={
//                   <Protected>
//                     <EditBlog />
//                   </Protected>
//                 }
//               />
//               <Route
//                 path="/blogs/:id"
//                 element={
//                   <Protected>
//                     {" "}
//                     <SingleBlog />
//                   </Protected>
//                 }
//               />
//             </Routes>
//           </Suspense>
//         </ErrorBoundary>
//       </BrowserRouter>
//       {/* </ErrorBoundary> */}
//     </Provider>
//   );
// }

// export default App;
