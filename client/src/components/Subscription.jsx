import { useNavigate } from "react-router-dom"

export default function Subscription() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/stripe/create-checkout-session')
    }
    return (
        <button onClick={handleClick}>
            CLICK THIS BUTTON FOR SUBSCRIPTION
        </button>
    )
}
