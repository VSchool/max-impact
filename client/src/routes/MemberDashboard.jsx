import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useFileMetadataContext } from "../hooks";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

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

export const MemberDashboard = () => {

    const { user } = useAuth0();
    const { getAllFileMetadata } = useFileMetadataContext();

    useEffect(() => {
        // getAllFileMetadata()
    }, [])

    return (
        <>
        <Navbar user={user} links={dashboardLinks} />
        <Outlet></Outlet>
        </>
    )
}