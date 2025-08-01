import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
      <div>
          <div className='footer' id='footer'>
              <div className="footer-content">
                  <div className="footer-content-left">
                      <h2 className="logo">HomeEase</h2>
                      <h2>Connect with us</h2>
                      <div className="footer-social-icons">
                          <img src={assets.facebook_icon} alt="" />
                          <img src={assets.twitter_icon} alt="" />
                          <img src={assets.linkedin_icon} alt="" />
                      </div>
                  </div>
                  <div className="footer-content-center">
                      <h2>COMPANY</h2>
                      <ul>
                          <li>Home</li>
                          <li>About Us</li>
                          <li>Bookings</li>
                          <li>Privacy Policy</li>
                      </ul>
                  </div>
                  <div className="footer-content-right">
                      <h2>GET IN TOUCH</h2>
                      <ul>
                          <li>+91 8003216547</li>
                          <li>contact@homeease.com</li>
                      </ul>
                  </div>
              </div>
              <hr />
              <p className='footer-copyright'>Copyright 2024 © HomeEase.com - All right Reserved.</p>
          </div>
      </div>
  )
}

export default Footer
