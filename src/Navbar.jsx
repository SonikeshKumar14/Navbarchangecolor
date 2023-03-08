import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from './logo.png'

const Navbar = () => {
  const location = useLocation()
  const isLinkActive = (to) => {
    return location.pathname === to;
  };
    return (
      <nav className='navbar'>
          <div className='nav-center'>
              <Link to='/'><img src={logo} alt="google" className='logo'/></Link>
              <ul className='nav-links'>
                  <li className={isLinkActive('/') ? 'active-link' : ''}><Link to='/' >Home</Link></li>
                  <li className={isLinkActive('/report') ? 'active-link' : ''}><Link to='/report' >Reports</Link></li>
                  <li className={isLinkActive('/product') ? 'active-link' : ''}><Link to='/product' >Products</Link></li>
                  <li className={isLinkActive('/team') ? 'active-link' : ''}><Link to='/pricing'>Team</Link></li>
              </ul>
          </div>
      </nav>
    )
}

export default Navbar;