const express = require('express')
const stripe = require('stripe')('sk_test_51MmO6CHanGj2ccfvz0s8zpIlf926yRWnavZF5dgeev2WWW126yIVbigLWRQzj0A6iBXVrQVKgrrbKKHl3QK5D63p00bx81kVju');

const stripeRouter = express.Router()

stripeRouter.get('/create-checkout-session', async (req,res,next) => {
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
        success_url: 'https://google.com',
        cancel_url: 'https://google.com'
    })

    res.redirect(303, session.url)
})

module.exports = {
    stripeRouter
}