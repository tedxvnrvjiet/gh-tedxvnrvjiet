import React from 'react'
import './Footer.css'
import logo from "../../assets/logos/logo-white.png"
import {IoLogoInstagram} from 'react-icons/io5'
import {IoLogoLinkedin} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'

function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="footer_logo">
                <img className='logo' src={logo} alt="TedXVNRVJIET Logo" />
            </div>
              <div className="footer_links team_link">
                  <div className="f_link"><a href="/team">Team 2023</a></div>
              </div>
              <div className="footer_links">
                  <div className="f_link"><a href="/">Home</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/about">About</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/past-editions">Past Editions</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/team24">Team</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/sponsors">Sponsors</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/contact-us">Contact</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/register">Tickets</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/terms-and-conditions">T&C</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/privacy-policy">Privacy Policy</a></div>
                  <span>|</span>
                  <div className="f_link"><a href="/refund-and-shipping">Refund Policy</a></div>
              </div>
              <div className="footer_social">
                  <div className="social_logo"> <a target='_blank' href="https://instagram.com/tedxvnrvjiet"><IoLogoInstagram size={30} /> </a></div>
                  <div className="social_logo"> <a target='_blank' href="https://www.linkedin.com/company/tedx-vnrvjiet/about/"><IoLogoLinkedin size={30} /></a> </div>
                  <div className="social_logo"> <a href="mailto:tedx@vnrvjiet.in"><HiOutlineMail size={30} /> </a></div>
              </div>
              <hr color='white' className='line'/>
              <div className="footer_trademark">
                  <span className='gray'> © 2023 </span><span className='red'>TED<sup>x</sup></span> VNRVJIET <span className="gray">. All Rights Reserved. This independent TED<sup>X</sup> Event is operated under license from TED</span>
              </div>
        </div>
    </footer>
  )
}

export default Footer