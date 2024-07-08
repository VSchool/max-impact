
// RouterProvider.jsx
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
import Archive from "../components/Archive";
import LessonsDisplayArea from "../components/LessonsDisplayArea";
import Registration from "../components/Registration";
import AdminPage from "../components/AdminPage";
import ArchiveUser from "../components/ArchiveUser";
import VideoPopUp from "../components/VideoPopUp";
import CourseEditPopup from "../components/CourseEditPopUp";

// Create the router with routes for different components
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'member-dashboard', element: <MemberDashboard /> },
      { path: 'lessons', element: <LessonsDisplayArea /> },
      { path: 'archive', element: <Archive /> },
      { path: 'archiveuser', element: <ArchiveUser /> },
      { path: 'video', element: <VideoPopUp /> },
      { path: 'edit', element: <CourseEditPopup /> },
    ],
  },
  {
    path: '/admin',
    element: <Root admin />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'Alessons', element: <AdminPage /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/registration', element: <Registration /> },
  { path: '/signup', element: <SignUp /> },
]);

// Wrap the RouterProvider with authentication
export const RouteProvider = withAuthenticationRequired(() => {
  return <ReactRouterProvider router={router} />
});






// import {
//   createBrowserRouter,
//   RouterProvider as ReactRouterProvider,
// } from "react-router-dom";
// import { Root } from "../routes/Root";
// import { withAuthenticationRequired } from "@auth0/auth0-react";
// import { MemberDashboard } from '../routes/MemberDashboard';
// import { AdminDashboard } from '../routes/AdminDashboard'; 
// import Landing from "../components/Landing";
// import Login from "../components/Login";
// import SignUp from "../components/SignUp";
// import Archive from "../components/Archive";
// import LessonsDisplayArea from "../components/LessonsDisplayArea";
// import Registration from "../components/Registration";
// import AdminPage from "../components/AdminPage";
// import ArchiveUser from "../components/ArchiveUser";
// import VideoPopUp from "../components/VideoPopUp";
// import CourseEditPopup from "../components/CourseEditPopUp";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         index: true,
//         element: <Landing />  
//       },
//       {
//         path: 'member-dashboard',
//         element: <MemberDashboard />
//       }
//     ]
//   },
//   {
//     path: '/admin',
//     element: <Root admin />,
//     children: [
//       {
//         index: true,
//         element: <AdminDashboard />,
//       },
//     ],
//   },
//   {
//     path: '/login',  
//     element: <Login />
//   },
//   {
//     path: '/registration',
//     element: <Registration />
//   },
//   {
//     path: '/signup',  
//     element: <SignUp />
//   },
//   {
//     path: '/lessons',  
//     element: <LessonsDisplayArea />
//   },
//   {
//     path: '/Alessons',  
//     element: <AdminPage />
//   },
//   {
//     path: '/archive',  
//     element: <Archive />
//   },
//   {
//     path: '/archiveuser',  
//     element: <ArchiveUser />
//   },
//   {
//     path: '/video',  
//     element: <VideoPopUp />
//   },
//   {
//     path: '/edit',  
//     element: <CourseEditPopup />
//   }
  
// ]);

// export const RouteProvider = withAuthenticationRequired(() => {
//   return <ReactRouterProvider router={router} />
// })
