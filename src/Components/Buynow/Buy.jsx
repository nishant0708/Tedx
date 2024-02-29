import React from 'react'
import "./Buy.css"
import buytick from "../Assests/Images/ticket-svgrepo-com.svg"
const Buy = () => {
  return (
    <div className='buy'>
      <p className='buynowbut'>
        <img  className="buyimg" src={buytick} alt=''/></p>
    </div>
  )
}

export default Buy