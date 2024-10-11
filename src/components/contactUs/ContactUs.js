import React, {useRef} from 'react'
import './Contact.css'
import {IoLocationSharp} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import {TbPhoneCall} from 'react-icons/tb'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
// import { sendMail, sendMailClient } from "./email";

function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hkxr8o5', 'template_9vmjbyh', form.current, 'RnNExIqLaXFERTIvI')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully');
      }, (error) => {
        console.log(error.text);
        toast.error('Email not sent');
      });
  };

  return (
    <div className='contact_us'>
      <Toaster />
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
                <p className='contact_para'><span>Rishitha &nbsp;</span> <a href="tel:9618021501">9618021501</a></p>
                <p className='contact_para'><span>KAIF</span><a href="tel:8978443304">8978443304</a></p>
                <p className='contact_para'><span>SAMI</span><a href="tel:9676733260">9676733260</a></p>

              </div>
            </div>
          </div>
        </div>
        <div className="container_right">
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input__row">
                <input type="text" name='user_name' placeholder='Name' />
                <input type="email" name='user_email' placeholder='Email' />
              </div>
              <div className="input_row">
                <input type="tel" name="phone_no" placeholder='Phone No.' id="" />
              </div>
              <div className="input_row">
                <input type="text" name='subject' placeholder='Subject' />
              </div>
              <div className="input_row">
                <textarea name='message' id="" cols="30" rows="5" placeholder='Message'></textarea>
              </div>
              <input  type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs