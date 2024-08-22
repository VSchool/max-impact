import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthenticationGuard = ({ component, admin }) => {
  const { user } = useAuth0()
  const metadata = user ? user[`${import.meta.env.VITE_AUTH0_NAMESPACE}/app_metadata`] : {admin: false, subscriptionStatus: 'notActive'}
  const navigate = useNavigate()

  useEffect(() => {
    if (admin !== metadata.admin) navigate(metadata.admin ? '/admin' : '/dashboard')
  }, [admin, user, navigate])

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>LOADING...</div>,
  })

  return <Component />
}
