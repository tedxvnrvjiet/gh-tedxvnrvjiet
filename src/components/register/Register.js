import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='register'>
        <h1>Register</h1>
          {/* <iframe id="ts-iframe" src="https://www.townscript.com/v2/widget/tedxvnrvjiet/booking" frameborder="0" height="600" width="80%"></iframe><link rel="stylesheet" href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" ></link> */}
          <iframe id="ts-iframe" src="https://www.townscript.com/v2/widget/tedxvnrvjiet-2023-004411/booking" frameborder="0" height="600" width="80%"></iframe><link rel="stylesheet" href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" ></link>
    </div>
  )
}

export default Register