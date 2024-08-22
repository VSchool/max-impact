// RouterProvider.jsx
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'
import { Root } from '../routes/Root'
import { MemberDashboard } from '../routes/MemberDashboard'
import { AdminDashboard } from '../routes/AdminDashboard'
import Landing from '../components/Landing'
import Archive from '../components/Archive'
import LessonsDisplayArea from '../components/LessonsDisplayArea'
import AdminPage from '../components/AdminPage'
import ArchiveUser from '../components/ArchiveUser'
import ContactUs from '../components/ContactUs'
import Subscription from '../components/Subscription'
import PaymentLanding from '../components/PaymentLanding'
import { AuthenticationGuard } from './AuthenticationGuard'
import MemberLanding from '../components/MemberLanding'
import AdminLesson from '../components/AdminLesson'
import Capture from '../components/Capture'

const publicRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
      {
        path: 'payment-confirmation',
        element: <PaymentLanding />,
      },
    ],
  },
  {
    path: '/capture',
    element: <AuthenticationGuard component={Capture} />,
    children: []
  },
  {
    path: '/dashboard',
    element: <AuthenticationGuard component={MemberDashboard} />,
    children: [
      {
        index: true,
        element: <MemberLanding />,
      },
      {
        path: 'capture',
        element: <Capture />
      },
      {
        path: 'subscribe',
        element: <Subscription />,
      },
      {
        path: 'lessons',
        element: <LessonsDisplayArea />,
      },
      {
        path: 'archive',
        element: <ArchiveUser />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AuthenticationGuard admin component={AdminDashboard} />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: 'archive',
        element: <Archive />,
      },
      {
        path: 'lessons',
        element: <LessonsDisplayArea />,
      },
    ],
  },
])

export const RouteProvider = () => {
  return (
    <>
      <ReactRouterProvider router={publicRouter} />
    </>
  )
}
