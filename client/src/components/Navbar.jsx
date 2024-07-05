import '../styles/navbar.css'
import logo from '../assets/logo.png'
import mobileLogo from '../assets/mobile-logo.png'
import Button from './global/Button'
import Burger from './Burger'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = ({ links, user }) => {
  const { logout } = useAuth0();
  const navigate = useNavigate()

  const handleLoginLogout = () => {
    if (user) {
      logout()
    } else {
      navigate('/dashboard')
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Max Impact Council"
            className="logo logo-desktop"
          />
          <img
            src={mobileLogo}
            alt="Max Impact Council"
            className="logo logo-mobile"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.label}</Link>
          </li>
        ))}
        <li>
          <Button onClick={handleLoginLogout}>{user ? 'Logout' : 'Login'}</Button>
        </li>
      </ul>
      <div className="burger">
        <Burger links={links} />
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  links: [
    { label: 'Home', link: '' },
    { label: 'Courses', link: 'member-dashboard' },
    { label: 'Contact Us', link: '' },
  ],
}

export default Navbar
