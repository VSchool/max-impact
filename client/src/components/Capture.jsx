import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Capture() {
  const { user } = useAuth0()
  const [metadata, setMetadata] = useState({ customerId: '' })
  const [userId, setUserId] = useState('userId')

  useEffect(() => {
    if (user) {
      setMetadata(user[`${import.meta.env.VITE_AUTH0_NAMESPACE}/app_metadata`])
      setUserId(user.sub)
    }
  }, [user])
  return (
    <>
      <div>
        <h3>You need to subscribe</h3>
        <div>Price is $35 / month</div>
        <form action="/stripe/create-checkout-session" method="POST">
          <input type="hidden" id="customer" name="customer" value={userId} />
          <button type="submit">Checkout now!</button>
        </form>
      </div>
    </>
  )
}
