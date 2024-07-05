import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/global.css'
import Navbar from '../components/Navbar'

const landingLinks = [
    { label: 'Home', url: '/' },
    { label: 'Courses', url: '/dashboard/lessons' },
    { label: 'Contact Us', url: '/' },
  ]
const dashboardLinks = [
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'Courses', url: '/dashboard/lessons' },
    { label: 'Contact Us', url: '/' },
  ]
const adminLinks = [
    { label: 'Admin', url: '/admin' },
    { label: 'Courses', url: '/admin/lessons' },
    { label: 'Archive', url: '/admin/archive' },
  ]

export const Root = ({ admin }) => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  useEffect(() => {
    if (admin !== user.admin) navigate(user.admin ? '/admin' : '/')
  }, [admin, user, navigate])

  return (
    <>
      <Navbar user={user} links={user && user.admin ? adminLinks : user ? dashboardLinks : landingLinks} />
      <Outlet />
    </>
  )
}
