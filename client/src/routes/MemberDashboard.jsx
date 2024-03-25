import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useFileMetadataContext } from "../hooks";

export const MemberDashboard = () => {

    const { logout, user } = useAuth0();
    const { getAllFileMetadata } = useFileMetadataContext();

    useEffect(() => {
        getAllFileMetadata()
    }, [])

    return (
        <div>
            <h1>Member Dashboard</h1>
            <img src={user.picture} alt="avatar" width={32} height={32} />
            <h3>Welcome, {user.name}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    )
}