import React from 'react';
import './Sidebar.css';
import { useOutletContext } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/logo.png';
import homeIcon from '../assets/home.png';
import uploadIcon from '../assets/Upload.png';
import archiveIcon from '../assets/archive.png';
import settingsIcon from '../assets/settings.png';
import paymentsIcon from '../assets/payments.png';
import logoutIcon from '../assets/logout.png';
import favoriteIcon from '../assets/favorites.png';
import contactIcon from '../assets/contact.png';

import { Link } from 'react-router-dom';

const Sidebar = () => {
    // Retrieve the isAdmin context from the Outlet context
    const { isAdmin } = useOutletContext();
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    // Define labels for home, admin, user, account settings, and logout
    const homeLabels = [
        { label: 'Home', icon: homeIcon, path: '/' }
    ];

    const adminLabels = [
        { label: 'Upload Class', icon: uploadIcon, path: '/admin/lessons' },
        { label: 'Class Archive', icon: archiveIcon, path: '/admin/archive' }
    ];

    const userLabels = [
        { label: 'Recent Classes', icon: uploadIcon, path: '/dashboard/lessons' },
        { label: 'Favorites', icon: favoriteIcon, path: '/dashboard/lessons' },
        { label: 'Class Archive', icon: archiveIcon, path: '/dashboard/archive' }
    ];

    const accountSettingsLabels = [
        { label: 'Account Settings', icon: settingsIcon, path: '/account-settings' },
        { label: 'Subscriptions & Payments', icon: paymentsIcon, path: '/subscriptions-payments' }
    ];

    const logoutLabel = [
        { label: 'Logout', icon: logoutIcon, path: '/logout', action: handleLogout }
    ];

    // Select the appropriate menu items based on the user role
    const sidebarLabels = isAdmin ? adminLabels : userLabels;

    return (
        <div className="sidebar">
            <img src={logo} alt="Maximum Impact Council Logo" className="sidebar-logo" />
            <div className="sidebar-greeting">Hello, {isAdmin ? 'Admin' : 'User'}</div>
            <ul className="sidebar-list">
                <div className="home-section">
                    {homeLabels.map((item, index) => (
                        <li key={index} className="sidebar-item">
                            <Link to={item.path} className="custom-link">
                                <img src={item.icon} alt={item.label} className="sidebar-item-icon" />
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </div>
                <div className="sidebar-section">
                    {sidebarLabels.map((item, index) => (
                        <li key={index} className="sidebar-item">
                            <Link to={item.path} className="custom-link">
                                <img src={item.icon} alt={item.label} className="sidebar-item-icon" />
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </div>
                <div className="sidebar-section">
                    {accountSettingsLabels.map((item, index) => (
                        <li key={index} className="sidebar-item">
                            <Link to={item.path} className="custom-link">
                                <img src={item.icon} alt={item.label} className="sidebar-item-icon" />
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </div>
                {isAdmin ? null : (
                    <li className="sidebar-item">
                        <Link to="/contact" className="custom-link">
                            <img src={contactIcon} alt="Contact Us" className="sidebar-item-icon" />
                            Contact Us
                        </Link>
                    </li>
                )}
                {logoutLabel.map((item, index) => (
                    <li key={index} className="sidebar-item" onClick={item.action}>
                        <Link to={item.path} className="custom-link">
                            <img src={item.icon} alt={item.label} className="sidebar-item-icon" />
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
