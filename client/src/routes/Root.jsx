import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/global.css'
import { AdminProvider } from '../providers/AdminProvider'
export const Root = ({ admin }) => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  const isAdmin = user?.admin
  useEffect(() => {
    if (admin !== user.admin) navigate(user.admin ? '/admin' : '/')
  }, [admin, user, navigate])

  return (
    <AdminProvider isAdmin={isAdmin}>
      <Outlet isAdmin={isAdmin} />
      </AdminProvider>
  )
}
