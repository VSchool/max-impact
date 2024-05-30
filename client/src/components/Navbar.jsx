import '../styles/navbar.css'
import logo from '../assets/logo.png'
import Button from './global/Button'

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src={logo} alt="Max Impact Council" className="logo" />
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
      <div className="navbar-burger">BURGER</div>
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
