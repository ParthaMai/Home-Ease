import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <a href="home">Home</a>
        <a href="#explore-menu">Service</a>
        <a href="#app-downlaod">Mobile-app</a>
        <a href="#footer">contact-Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <button>Sign in</button>
        <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className='nav-profile-dropdown'>
            <li><img src={assets.Booking_icon} alt="" /><p>Bookings</p></li>
            <li><img src={assets.logout_icon} alt="" /><p>Logout</p> </li>
          </ul>
        </div>


      </div>
    </div>
    
  )
}

export default Navbar
