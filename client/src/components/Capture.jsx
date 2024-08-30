import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Capture() {
  const { user } = useAuth0()
  const [metadata, setMetadata] = useState({ customerId: '' })
  const [userInfo, setUserInfo] = useState('userId')
  const [productId, setProductId] = useState(import.meta.env.VITE_STRIPE_PRODUCT_ID)
  const quarterlyId = import.meta.env.VITE_STRIPE_QUARTERLY_PRODUCT_ID
  const yearlyId = import.meta.env.VITE_STRIPE_YEARLY_PRODUCT_ID

  useEffect(() => {
    if (user) {
      setMetadata(user[`${import.meta.env.VITE_AUTH0_NAMESPACE}/app_metadata`])
      setUserInfo({userId: user.sub, email: user.email})
    }
  }, [user])

  return (
    <>
    <h3>You need to subscribe to access the app.</h3>
    <h5>Select an option below</h5>
      <div>
        <div>Monthly Subscription - $35 / month</div>
        <form action="/stripe/create-checkout-session" method="POST">
          <input type="hidden" id="customer" name="customer" value={userInfo.userId} />
          <input type="hidden" id="email" name="email" value={userInfo.email} />
          <input type="hidden" id="productId" name="productId" value={productId} />
          <button type="submit">Checkout now!</button>
        </form>
      </div>
      <div>
        <div>Quarterly Subscription - $100 / 3 months (save $5)</div>
        <form action="/stripe/create-checkout-session" method="POST">
          <input type="hidden" id="customer" name="customer" value={userInfo.userId} />
          <input type="hidden" id="email" name="email" value={userInfo.email} />
          <input type="hidden" id="productId" name="productId" value={quarterlyId} />
          <button type="submit">Checkout now!</button>
        </form>
      </div>
      <div>
        <div>Yearly Subscription - $350 / year (save $70)</div>
        <form action="/stripe/create-checkout-session" method="POST">
          <input type="hidden" id="customer" name="customer" value={userInfo.userId} />
          <input type="hidden" id="email" name="email" value={userInfo.email} />
          <input type="hidden" id="productId" name="productId" value={yearlyId} />
          <button type="submit">Checkout now!</button>
        </form>
      </div>
    </>
  )
}
