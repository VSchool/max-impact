const express = require('express')
const stripe = require('stripe')(
  'sk_test_51MmO6CHanGj2ccfvz0s8zpIlf926yRWnavZF5dgeev2WWW126yIVbigLWRQzj0A6iBXVrQVKgrrbKKHl3QK5D63p00bx81kVju'
)
const updateUserMetadata = require('../services/auth-metadata')

const stripeRouter = express.Router()

// callback
stripeRouter.get('/confirm', async (req, res, next) => {
  const { userId, status } = req.params
  //   redirect if failure
  if (status === 'failure') {
    res.redirect(process.env.STRIPE_FAILURE_REDIRECT)
  } else {
    //   otherwise success
    //   find subscriptionId
    //   find customerId
    //   add metadata for userId to auth0
    const updateRes = await updateUserMetadata(userId, { admin2: 'hello' })
    //   redirect back to app
    res.redirect(process.env.STRIPE_SUCCESS_REDIRECT)
  }
})

stripeRouter.post('/create-checkout-session', async (req, res, next) => {
  const userId = req.body.customer
  //   price is hard coded as we only have one price (this could be an input if needed)
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
    success_url: `${process.env.STRIPE_SUCCESS_URI}&userId=${userId}`,
    cancel_url: `${process.env.STRIPE_FAILURE_URI}&userId=${userId}`,
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

// webhook for subscription events
stripeRouter.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  (request, response) => {
    let event = request.body
    // Replace this endpoint secret with your endpoint's unique secret
    // If you are testing with the CLI, find the secret by running 'stripe listen'
    // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
    // at https://dashboard.stripe.com/webhooks
    const endpointSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature']
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        )
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message)
        return response.sendStatus(400)
      }
    }
    let subscription
    let status
    // Handle the event
    switch (event.type) {
      case 'customer.subscription.trial_will_end':
        subscription = event.data.object
        status = subscription.status
        console.log(`Subscription status is ${status}.`)
        // Then define and call a method to handle the subscription trial ending.
        // handleSubscriptionTrialEnding(subscription);
        break
      case 'customer.subscription.deleted':
        subscription = event.data.object
        status = subscription.status
        console.log(`Subscription status is ${status}.`)
        console.log(subscription.id)
        console.log(subscription.customer)
        console.log(subscription.status)
        // Then define and call a method to handle the subscription deleted.
        // handleSubscriptionDeleted(subscriptionDeleted);
        break
      case 'customer.subscription.created':
        subscription = event.data.object
        status = subscription.status
        console.log(`Subscription status is ${status}.`)
        // Then define and call a method to handle the subscription created.
        // handleSubscriptionCreated(subscription);
        break
      case 'customer.subscription.updated':
        subscription = event.data.object
        status = subscription.status
        console.log(`Subscription status is ${status}.`)
        // Then define and call a method to handle the subscription update.
        // handleSubscriptionUpdated(subscription);
        break
      case 'entitlements.active_entitlement_summary.updated':
        subscription = event.data.object
        console.log(`Active entitlement summary updated for ${subscription}.`)
        // Then define and call a method to handle active entitlement summary updated
        // handleEntitlementUpdated(subscription);
        break
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`)
    }
    // Return a 200 response to acknowledge receipt of the event
    response.send()
  }
)

module.exports = {
  stripeRouter,
}
