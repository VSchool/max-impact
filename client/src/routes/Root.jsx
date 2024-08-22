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
  sidebar: [],
}
const dashboardLinks = {
  main: [
    { label: 'Home', url: '/' },
    { label: 'Courses', url: '/dashboard/lessons' },
    { label: 'Contact Us', url: '/contact' },
  ],
  sidebar: [
    { label: 'Search', url: '/' },
    { label: 'Archive', url: '/dashboard/archive' },
    { label: 'Payment Method', url: '/' },
    { label: 'Manage Account', url: '/' },
  ],
}
const adminLinks = {
  main: [
    { label: 'Home', url: '/admin' },
    { label: 'Courses', url: '/admin/lessons' },
    { label: 'Contact us', url: '/contact' },
  ],
  sidebar: [
    { label: 'Search', url: '/' },
    { label: 'Uploaded Courses', url: '/admin/lessons' },
    { label: 'Stats', url: '/' },
    { label: 'Archive', url: '/dashboard/archive' },
  ],
}

export const Root = ({ admin }) => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const metadata = user[`${import.meta.env.VITE_AUTH0_NAMESPACE}/app_metadata`]
      if (metadata.admin) {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    }
  }, [isAuthenticated, isLoading])

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }


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
      <Navbar links={landingLinks} />
      <Outlet />
    </>
  )
}
