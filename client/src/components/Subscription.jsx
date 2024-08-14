import { useState } from 'react'

export default function Subscription() {
  const [customer, setCustomer] = useState('userId')
  return (
    <>
      <form action="/stripe/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
      <form action="/stripe/create-portal-session" method="POST">
        <input type="hidden" id="customer" name="customer" value={customer} />
        <button type="submit">Manage subscription</button>
      </form>
    </>
  )
}
