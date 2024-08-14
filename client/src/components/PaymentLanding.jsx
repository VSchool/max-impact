import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export default function PaymentLanding() {
    const [searchParams] = useSearchParams()
    const status = searchParams.get('status')

    return (
        <div>
            {status == 'success' && 'SUCCESS.  WELCOME TO MAXIMUM IMPACT.'}
            {status == 'failure' && 'UNABLE TO COMPLETE TRANSACTION.  PLEASE TRY AGAIN.'}
        </div>
    )
}
