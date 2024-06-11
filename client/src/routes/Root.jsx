import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/global.css'

export const Root = ({ admin }) => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  useEffect(() => {
    if (admin !== user.admin) navigate(user.admin ? '/admin' : '/')
  }, [admin, user, navigate])

  return (
    <>
      <Outlet />
    </>
  )
}
