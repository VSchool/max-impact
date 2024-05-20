import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'
import { Root } from '../routes/Root'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { MemberDashboard } from '../routes/MemberDashboard'
import { AdminDashboard } from '../routes/AdminDashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <MemberDashboard />,
      },
    ],
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
])

export const RouteProvider = withAuthenticationRequired(() => {
  return <ReactRouterProvider router={router} />
})
