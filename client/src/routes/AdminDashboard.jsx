import { useEffect } from "react";
import { useFileMetadataContext } from "../hooks"
import { useAuth0 } from "@auth0/auth0-react";

export const AdminDashboard = () => {

    const { logout, user } = useAuth0();
    const { getAllFileMetadata } = useFileMetadataContext();

    useEffect(() => {
        getAllFileMetadata()
    }, [])

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h3>Welcome, {user.name}</h3>
            <button onClick={logout}>Logout</button>
            <code>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </code>

            {/* upload pdf */}
            {/* upload mp4 */}
            {/* view/update/delete files */}
        </div>
    )
}