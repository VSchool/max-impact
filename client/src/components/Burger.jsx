import { useState } from 'react'
import burger from '../assets/burger.svg'
import x from '../assets/x.svg'
import Button from './global/Button'

const Burger = ({ links, handleLoginLogout, user }) => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggle = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu)
  }

  return (
    <div className="burger-menu">
      <div className="navbar-burger">
        <img onClick={handleToggle} src={showMenu ? x : burger} />
      </div>
      {showMenu && (
        <div className="dropdown">
          <ul className="dropdown-list">
            {links.map((link, index) => (
              <li className='dropdown-list-li' key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
            <li className="dropdown-btn-li">
              <Button onClick={handleLoginLogout} style="dropdown-btn">{user ? 'Logout' : "Login"}</Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Burger
