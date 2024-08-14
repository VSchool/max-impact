export default function Subscription() {
    return (
        <form action="/stripe/create-checkout-session" method="POST">
            <button type="submit">Checkout</button>
        </form>
    )
}
