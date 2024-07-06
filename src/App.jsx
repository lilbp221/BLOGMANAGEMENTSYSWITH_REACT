


import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import SingleBlog from './pages/blog/SingleBlog'

import {Provider} from 'react-redux'

import store from '../store/store'
import Protected from './Protected'
function App() {
  return (
   

    <Provider store={store}>
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Protected><Home /></Protected>} /> 
             <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
             <Route path="/blog/add" element={<Protected><AddBlog /></Protected>} />
             <Route path="/blog/edit/:id" element={<Protected><EditBlog /></Protected>} />
            <Route path="/blogs/:id" element={<Protected> <SingleBlog /></Protected>} />
      </Routes>
    </BrowserRouter>
    </Provider>

  )
}

export default App

// //Implementing lazy loading

// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { Suspense, lazy } from 'react';
// import { Audio } from 'react-loader-spinner';
// import { BallTriangle } from 'react-loader-spinner';

// import store from '../store/store';
// import Protected from './Protected';

// import { ErrorBoundary } from "react-error-boundary";


// // Lazy load the components
// const Home = lazy(() => import('./pages/blog/Home'));
// const Register = lazy(() => import('./pages/auth/Register'));
// const Login = lazy(() => import('./pages/auth/Login'));
// const AddBlog = lazy(() => import('./pages/blog/AddBlog'));
// const EditBlog = lazy(() => import('./pages/blog/EditBlog'));
// const SingleBlog = lazy(() => import('./pages/blog/SingleBlog'));

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//       <ErrorBoundary
//       fallback={
//         <div className="error-page">
//           <div className="error-container">
//             <h1>Something Went Wrong</h1>
//             <p>We're sorry, Please try again later.</p>
//           </div>
//         </div>
//       }
//     >
//         <Suspense fallback={<BallTriangle />}>
//           <Routes>
//           {/* demo of high order components is <Protected> */}
//             <Route path="/" element={<Protected><Home /></Protected>} /> 
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/blog/add" element={<Protected><AddBlog /></Protected>} />
//             <Route path="/blog/edit/:id" element={<Protected><EditBlog /></Protected>} />
//             <Route path="/blogs/:id" element={<Protected> <SingleBlog /></Protected>} />
//           </Routes>
//         </Suspense>
//     </ErrorBoundary>

//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;



