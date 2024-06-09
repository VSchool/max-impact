import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { Root } from "../routes/Root";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { MemberDashboard } from '../routes/MemberDashboard';
import { AdminDashboard } from '../routes/AdminDashboard'; 
import Landing from "../components/Landing";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

import LessonsDisplayArea from "../components/LessonsDisplayArea";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Landing />  
      },
      {
        path: 'member-dashboard',
        element: <MemberDashboard />
      }
    ]
  },
  {
    path: '/admin',
    element: <Root admin />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: '/login',  // Add the login route
    element: <Login />
  },
  {
    path: '/signup',  // Add the login route
    element: <SignUp />
  },
  {
    path: '/lessons',  // Add the lessons path
    element: <LessonsDisplayArea />
  },
]);

export const RouteProvider = withAuthenticationRequired(() => {
  return <ReactRouterProvider router={router} />
})
