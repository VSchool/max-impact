import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react';
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
    { label: 'Contact us', url: '/admin/contact' },
  ],
  sidebar: [
    
    {label: "Search", url: '/'},
    {label: "Uploaded Courses", url: '/admin/lessons'},
    {label: "Stats", url: '/'},
    {label: "Archive", url: '/admin/archive'},
    
  ]
}

export const Root = ({ admin, showNavbar = true }) => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  const metadata = user[`${import.meta.env.VITE_AUTH0_NAMESPACE}/user_metadata`]
  useEffect(() => {
    if (admin !== metadata.admin) navigate(user.admin ? '/admin' : '/')
  }, [admin, user, navigate])


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check the screen size on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

console.log(user, metadata);

  return (
    <>
    {(showNavbar || isMobile) && (
      <Navbar user={user} links={user && metadata.admin ? adminLinks : user ? dashboardLinks : landingLinks} />
    )}
    <Outlet context={{ isAdmin: metadata.admin }} />
  </>
  )
}
