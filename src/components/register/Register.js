import React from "react";
import "./Register.css";
import comingSoonImage from "./Coming-Soon/COMINGSOON.png";

function Register() {
  return (
    <div className="register">
      {/* <iframe id="ts-iframe" src="https://www.townscript.com/v2/widget/tedxvnrvjiet/booking" frameborder="0" height="600" width="80%"></iframe><link rel="stylesheet" href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" ></link> */}
      {/* <iframe id="ts-iframe" src="https://www.townscript.com/v2/widget/tedxvnrvjiet/booking" frameborder="0" height="600" width="80%"></iframe><link rel="stylesheet" href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" ></link> */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {}
        <img
          src={comingSoonImage}
          alt="Coming Soon"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
    </div>
  );
}

export default Register;
