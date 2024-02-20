import React from 'react';
import './Ticketicon.css';

const Ticketicon = () => {
  return (
    <div className="ticket-icon-container">
      <div className="ticket-icon-wrapper">
        <img
          src={process.env.PUBLIC_URL + '/assets/other/ticket.png'}
          alt="Ticket Icon"
          className="ticket-icon"
        />
      </div>
    </div>
  );
}

export default Ticketicon;