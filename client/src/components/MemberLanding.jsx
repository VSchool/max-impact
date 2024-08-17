import { useAuth0 } from "@auth0/auth0-react"

export default function MemberLanding() {
    const { user, logout } = useAuth0()
    return (
        <div>
          <h1>Member Dashboard</h1>
            <img src={user.picture} alt="avatar" width={32} height={32} />
            <h3>Welcome, {user.name}</h3>
            <button onClick={logout}>Logout</button>  
        </div>
    )
}
