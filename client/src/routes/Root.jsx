import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/global.css'
import Navbar from '../components/Navbar'

const landingLinks = [
    { label: 'Home', link: '#' },
    { label: 'Courses', link: '#' },
    { label: 'Contact Us', link: '#' },
  ]
const dashboardLinks = [
    { label: 'Dashboard', link: '#' },
    { label: 'Courses', link: '#' },
    { label: 'Contact Us', link: '#' },
  ]
const adminLinks = [
    { label: 'Admin', link: '#' },
    { label: 'Courses', link: '#' },
    { label: 'Contact Us', link: '#' },
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
