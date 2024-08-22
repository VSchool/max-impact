
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
import ContactUs from "../components/ContactUs";

// Create the router with routes for different components
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Landing showNavbar={true}/>  
      },
      {
        path: 'contact',
        element: <ContactUs />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Root showNavbar={false} />,
    children: [
      {
        index: true,
        element: <MemberDashboard />
      },
      {
        path: 'lessons',
        element: <LessonsDisplayArea />
      },
      {
        path: 'archive',  
        element: <ArchiveUser />
      },
      {
        path: 'video',  
        element: <VideoPopUp />
      },
      {
        path: 'contact',  
        element: <ContactUs showNavbar={true} />
      }
    ]
  },
  {
    path: 'admin',
    element: <Root   showNavbar={false} admin />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: 'lessons',
        element: <AdminPage  />
      },
      {
        path: 'archive',
        element: <Archive/>
      },
      {
        path: 'video',  
        element: <VideoPopUp />
      },
      {
        path: 'edit',  
        element: <CourseEditPopup />
      },
      {
        path: 'contact',
        element: <ContactUs showNavbar={true}/>
      }
    ],
// <<<<<<< routing
// =======
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
// >>>>>>> main
  }
]);

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
