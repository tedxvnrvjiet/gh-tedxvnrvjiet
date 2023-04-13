import React from 'react'
import './Contact.css'
import {IoLocationSharp} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import {TbPhoneCall} from 'react-icons/tb'

function ContactUs() {
  return (
    <div className='contact_us'>
      <div className="contact_title"><h2>CONTACT</h2></div>
      <p className='contact_info'>We would love to respond to your queries and help you succeed. Feel free to get in touch with us</p>
      <div className="info_container">
        <div className="container_left">
          <div className="address">
            <div className="add_logo">
              <IoLocationSharp className='ji' size={70} color={'#e03a3c'} />
            </div>
            <h3>Our Address</h3>
            <p>Vignana Jyothi Nagar,Pragathi Nagar,

              Nizampet(S.O),Hyderabad 500 090

              TS,India.</p>
          </div>
          <div className="contact">
            <div className="email">
              <div className="email_logo">
                <HiOutlineMail className='ji' size={70} color={'#e03a3c'} />
              </div>
              <h3>Email Us</h3>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tedx@vnrvjiet.in">tedx@vnrvjiet.in</a>
            </div>
            <div className="call">
              <div className="call_logo">
                <TbPhoneCall className='ji' size={70} color={'#e03a3c'} />
              </div>
              <h3>Call Us</h3>
              <div className="contact_text">
                <p className='contact_para'><span>G Satya</span> <a href="tel:7893197646">7893197646</a></p>
                <p className='contact_para'><span>M Faizan</span><a href="tel:9010527720">9010527720</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container_right">
          <div className="form">
            <form>
              <div className="input__row">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
              </div>
              <div className="input_row">
                <input type="tel" name="" placeholder='Phone No.' id="" />
              </div>
              <div className="input_row">
                <input type="text" placeholder='Subject' />
              </div>
              <div className="input_row">
                <textarea name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
              </div>
              <input  type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs