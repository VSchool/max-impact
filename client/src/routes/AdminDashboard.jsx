import { useEffect } from "react";
import { useFileMetadataContext, useUploadForm } from "../hooks"
import { useAuth0 } from "@auth0/auth0-react";
import { UploadFileForm } from "../components/UploadFileForm";
import { FileMetadataList } from "../components/FileMetadataList";

export const AdminDashboard = () => {

    const { logout, user } = useAuth0();
    const { getAllFileMetadata } = useFileMetadataContext();

    useEffect(() => {
        getAllFileMetadata()
    }, [])

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <img src={user.picture} alt="avatar" width={32} height={32} />
            <h3>Welcome, {user.name}</h3>
            <button onClick={logout}>Logout</button>

            <UploadFileForm />
            <FileMetadataList />
        </div>
    )
}