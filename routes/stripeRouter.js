const express = require('express')
const stripe = require('stripe')(
  'sk_test_51MmO6CHanGj2ccfvz0s8zpIlf926yRWnavZF5dgeev2WWW126yIVbigLWRQzj0A6iBXVrQVKgrrbKKHl3QK5D63p00bx81kVju'
)

const stripeRouter = express.Router()

stripeRouter.post('/create-checkout-session', async (req, res, next) => {
  const subscriptionPriceLookupKey = 'price_1PnTNwHanGj2ccfvEq265lXz'

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [
      {
        price: subscriptionPriceLookupKey,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: process.env.STRIPE_SUCCESS_URI,
    cancel_url: process.env.STRIPE_FAILURE_URI,
  })

  res.redirect(303, session.url)
})

// store customerID in auth0 which will be utilized on this route
stripeRouter.post('/create-portal-session', async (req, res) => {
  // we need customerID which should be stored in auth0
  const { customer } = req.body

  console.log(customer)

  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  //   const returnUrl = process.env.STRIPE_USER_PORTAL_CALLBACK_URI

  //   const portalSession = await stripe.billingPortal.sessions.create({
  //     customer: customer,
  //     return_url: returnUrl,
  //   })

  //   res.redirect(303, portalSession.url)
  res.send('SUCCESS')
})

module.exports = {
  stripeRouter,
}
