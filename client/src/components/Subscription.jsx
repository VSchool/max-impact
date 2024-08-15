import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Subscription() {
  const { user } = useAuth0()
  const [userId, setUserId] = useState('userId')
  useEffect(() => {
    setUserId(user.sub)
  }, [user])
  return (
    <>
      <form action="/stripe/create-checkout-session" method="POST">
        <input type="hidden" id="customer" name="customer" value={userId} />
        <button type="submit">Checkout</button>
      </form>
      <form action="/stripe/create-portal-session" method="POST">
        <input type="hidden" id="customer" name="customer" value={userId} />
        <button type="submit">Manage subscription</button>
      </form>
    </>
  )
}
