import React from 'react';
import "./Buy.css";
import buytick from "../Assests/Images/ticket-svgrepo-com.svg";

const Buy = () => {
  return (
    <div className='buy'>
      <a href='https://insider.in/tedxdavv-mar7-2024/event'><p className='buynowbut'>
        <img className="buyimg" src={buytick} alt='' />
      </p> </a>
    </div>
  );
};

export default Buy;
