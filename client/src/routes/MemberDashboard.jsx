import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useFileMetadataContext } from "../hooks";
import { Outlet, useNavigate } from "react-router-dom";
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
    const metadata = user ? user[`${import.meta.env.VITE_AUTH0_NAMESPACE}/app_metadata`] : {}
    const navigate = useNavigate()
    const { getAllFileMetadata } = useFileMetadataContext();

    useEffect(() => {
        // getAllFileMetadata()
    }, [])

    useEffect(() => {
      // check that the user is subscribed
      if (!metadata.subscriptionStatus || !metadata.subscriptionStatus === 'active') {
        // if not redirect to capture payment page
        navigate('/capture')

      }
    }, [metadata])

    return (
        <>
        <Navbar user={user} links={dashboardLinks} />
        <Outlet></Outlet>
        </>
    )
}