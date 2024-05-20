import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import Landing from '../components/Landing'

export const Root = ({ admin }) => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  useEffect(() => {
    if (admin !== user.admin) navigate(user.admin ? '/admin' : '/')
  }, [admin, user, navigate])

  return (
    <>
      <Navbar />
      <Landing />
      {/* <Outlet /> */}
    </>
  )
}
