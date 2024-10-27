import React from 'react';
import avyukthaImage from '../../assets/Avyuktha.jpg';
import './Sponsors.css';

function Sponsors() {
  return (
    <div className="bg-black pt-10 pb-10">
      <div className="sponsors-title">
        <h1 className='text-center text-5xl text-red-600 font-bold sponsors-title-text'>
          <span style={{ color: "white" }}>OUR</span> <span>PARTNERS</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center p-4 px-20">
        <div className="gifting-partner">
          <h2 className="gifting-title">Gifting Partner</h2>
          <div className="partner-item">
            <img src={avyukthaImage} alt="Avyuktha" className="partner-logo" />
            <p className="partner-name">Avyuktha</p>
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-600 mx-40" />
    </div>
  );
}

export default Sponsors;
