import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/global.css'
import Navbar from '../components/Navbar'

const landingLinks = {
  main: [
    { label: 'Home', url: '/' },
    { label: 'Courses', url: '/dashboard/lessons' },
    { label: 'Contact Us', url: '/contact' },
  ],
  sidebar: []
}
const dashboardLinks = {
  main: [
    { label: 'Home', url: '/' },
    { label: 'Courses', url: '/dashboard/lessons' },
    { label: 'Contact Us', url: '/contact' },
  ],
  sidebar: [
    {label: "Search", url: '/'},
    {label: "Archive", url: '/dashboard/archive'},
    {label: "Payment Method", url: '/'},
    {label: "Manage Account", url: '/'}
  ]
}
const adminLinks = {
  main: [
    { label: 'Home', url: '/admin' },
    { label: 'Courses', url: '/admin/lessons' },
    { label: 'Contact us', url: '/contact' },
  ],
  sidebar: [
    
    {label: "Search", url: '/'},
    {label: "Uploaded Courses", url: '/admin/lessons'},
    {label: "Stats", url: '/'},
    {label: "Archive", url: '/dashboard/archive'},
    
  ]
}

export const Root = ({ admin }) => {
  const { user } = useAuth0()
  const metadata = user[`${import.meta.env.VITE_AUTH0_NAMESPACE}/app_metadata`]

  return (
    <>
      <Navbar user={user} links={user && metadata.admin ? adminLinks : user ? dashboardLinks : landingLinks} />
      <Outlet />
    </>
  )
}
