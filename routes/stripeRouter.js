const express = require('express')
const stripe = require('stripe')('sk_test_51MmO6CHanGj2ccfvz0s8zpIlf926yRWnavZF5dgeev2WWW126yIVbigLWRQzj0A6iBXVrQVKgrrbKKHl3QK5D63p00bx81kVju');

const stripeRouter = express.Router()

stripeRouter.post('/create-checkout-session', async (req,res,next) => {
    const subscriptionPriceLookupKey = 'price_1PnTNwHanGj2ccfvEq265lXz'

    const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [
            {
                price: subscriptionPriceLookupKey,
                quantity: 1
            }
        ],
        mode: 'subscription',
        success_url: process.env.STRIPE_SUCCESS_URI,
        cancel_url: process.env.STRIPE_FAILURE_URI
    })

    res.redirect(303, session.url)
})

module.exports = {
    stripeRouter
}