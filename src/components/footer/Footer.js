import React from 'react'
import './Footer.css'
import logo from "../../assets/logos/logo-white.png"
import {IoLogoInstagram} from 'react-icons/io5'
import {IoLogoLinkedin} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'

function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="footer_logo">
                <img className='logo' src={logo} alt="TedXVNRVJIET Logo" />
            </div>
              <div className="footer_links">
                  <div className="link">Home</div>
                  <span>|</span>
                  <div className="link">About</div>
                  <span>|</span>
                  <div className="link">Team</div>
                  <span>|</span>
                  <div className="link">Sponsors</div>
                  <span>|</span>
                  <div className="link">Contact</div>
              </div>
              <div className="footer_social">
                    <div className="social_logo"> <IoLogoInstagram size={30} /> </div>
                  <div className="social_logo"> <IoLogoLinkedin size={30} /> </div>
                  <div className="social_logo"> <HiOutlineMail size={30} /> </div>
              </div>
              <hr color='white' className='line'/>
              <div className="footer_trademark">
                  <span className='gray'> © 2023 </span><span className='red'>TED<sup>x</sup></span> VNRVJIET <span className="gray">. All Rights Reserved. This independent TED<sup>X</sup> Event is operated under license from TED</span>
              </div>
        </div>
    </div>
  )
}

export default Footer