import { useEffect } from "react";
import { useFileMetadataContext, useUploadForm } from "../hooks"
import { useAuth0 } from "@auth0/auth0-react";
import { UploadFileForm } from "../components/UploadFileForm";
import { FileMetadataList } from "../components/FileMetadataList";
import { Outlet, useNavigate } from "react-router-dom";
import '../styles/global.css'
import Navbar from '../components/Navbar'

const landingLinks = {
  main: [
    { label: 'Home', url: '/' },
    { label: 'Courses', url: '/dashboard/lessons' },
    { label: 'Contact Us', url: '/contact' },
  ],
  sidebar: []
}
const dashboardLinks = {
  main: [
    { label: 'Home', url: '/' },
    { label: 'Courses', url: '/dashboard/lessons' },
    { label: 'Contact Us', url: '/contact' },
  ],
  sidebar: [
    {label: "Search", url: '/'},
    {label: "Archive", url: '/dashboard/archive'},
    {label: "Payment Method", url: '/'},
    {label: "Manage Account", url: '/'}
  ]
}
const adminLinks = {
  main: [
    { label: 'Home', url: '/admin' },
    { label: 'Courses', url: '/admin/lessons' },
    { label: 'Contact us', url: '/contact' },
  ],
  sidebar: [
    
    {label: "Search", url: '/'},
    {label: "Uploaded Courses", url: '/admin/lessons'},
    {label: "Stats", url: '/'},
    {label: "Archive", url: '/dashboard/archive'},
    
  ]
}

export const AdminDashboard = ({admin}) => {
    const { logout, user } = useAuth0();
    const { getAllFileMetadata } = useFileMetadataContext();
    const navigate = useNavigate()
    const metadata = user[`${import.meta.env.VITE_AUTH0_NAMESPACE}/user_metadata`]
    useEffect(() => {
        if (admin !== metadata.admin) navigate(user.admin ? '/admin' : '/')
    }, [admin, user, navigate])

    useEffect(() => {
        getAllFileMetadata()
    }, [])

    return (
        <>
            <Navbar user={user} links={user && metadata.admin ? adminLinks : user ? dashboardLinks : landingLinks} />
            <Outlet></Outlet>
        </>
    )
}