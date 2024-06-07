import '../styles/navbar.css'
import logo from '../assets/logo.png'
import mobileLogo from '../assets/mobile-logo.png'
import Button from './global/Button'
import Burger from './Burger'

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
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
        </a>
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
        <li>
          <Button>Log in</Button>
        </li>
      </ul>
      <Burger links={links} />
    </nav>
  )
}

Navbar.defaultProps = {
  links: [
    { label: 'Home', link: '#' },
    { label: 'Courses', link: '#' },
    { label: 'Contact Us', link: '#' },
  ],
}

export default Navbar
