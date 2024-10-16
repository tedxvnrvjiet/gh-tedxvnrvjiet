import React from "react";
// import "./Register.css";
import QR_2024 from "../../assets/tickets/QR_2024.jpeg";
import Vanita from "../../assets/speakers24/Vanita.png"
import Reddy from "../../assets/speakers24/Reddy.jpg"
import Shrenik from '../../assets/speakers24/Shrenik.JPG'

function Register() {
  // Speakers array
  const speakers = [
    {
      name: 'Dr. BVR Mohan Reddy',
      designation: 'Founder of Cyient and Former Chairperson of NASSCOM',
      image: Reddy,
  },
  {
      name: 'Ms Vanitha Datla',
      designation: 'Vice Chairperson and Managing Director of Elico Ltd',
      image: Vanita,
  },
  {
    name: 'Mr Shrenik Shah',
    designation: 'Patient Ambassador, Indian Cancer Society, Global Ca-Larynx Speaker, Cancer survivor',
    image: Shrenik,
  }
  ];

  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-center items-center p-4 max-lg:mt-20">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left side for QR code (60-70% width on larger screens) */}
        <div className="flex flex-col justify-center items-center lg:w-2/3 gap-5 w-full mb-6 lg:mb-0">
          <h3 className="text-3xl font-bold text-gray-100">
            <span className="text-red-500">Scan</span> here to register
            </h3>
          <img src={QR_2024} alt="QR SCANNER" className="w-64 rounded-md" />
          <p className="text-white text-base">or</p>
          <div className="">
            <a className="bg-red-500 text-white px-4 py-2 rounded-md" href="https://rzp.io/rzp/d8EBdzG">
              Click here to pay
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center lg:w-1/3 w-full gap-8">
          <div className="hidden lg:block bg-gray-500 h-[300px] w-1 rounded-md"></div>

          {/* Right side for speakers (30% width on larger screens) */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold text-gray-100">
              Our <span className="text-red-500">Speakers</span>
            </h3>
            <div className="grid grid-cols-2 gap-6 mt-6">
              {speakers.map((speaker, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="max-md:w-28  md:w-20 md:h-20 rounded-full border-4 border-red-500"
                  />
                  <span className="text-gray-100">{speaker.name}</span>
                </div>
              ))}
            </div>
            <div className="text-white mt-6">
              and more <span className="text-red-500">. . .</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
