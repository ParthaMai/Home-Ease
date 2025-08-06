import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const[menu,setMenu] = useState("service");

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href="#service-display" onClick={()=>setMenu("service")} className={menu==="service"?"active":""}>Service</a>
        <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-Us</a>
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
