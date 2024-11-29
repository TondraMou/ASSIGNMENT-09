import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from './components/Mainlayout'
import Error from './components/Error'
import Home from './pages/Home'
import 'aos/dist/aos.css';
import StartLearning from './pages/StartLearning'
import Lesson from './pages/Lesson'
import Tutorial from './pages/Tutorial'
import AuthProvider from './components/AuthProvider/AuthProvider'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import MyProfile from './components/MyProfile'
import UpdateProfile from './components/UpdateProfile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/start-learning",
        element: <StartLearning></StartLearning>,
      },
      {
        path: "/lessons/:lesson_no",
        element: <PrivateRoute>
          <Lesson></Lesson>
        </PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch("/vocabularies.json");
          const data = await response.json();
          return data.filter(vocab => vocab.lesson_no === parseInt(params.lesson_no));
        },
      },
      {
        path: "/tutorial",
        element: <PrivateRoute>
          <Tutorial></Tutorial>
        </PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/reset-password",
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}>
    </AuthProvider>
    
  </StrictMode>,
)