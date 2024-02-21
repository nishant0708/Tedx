import React, { useRef } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const recipientEmail = form.current['to_email'].value.trim();
  if (!recipientEmail) {
    alert("Recipient's email address is required.");
    return;
  }

    emailjs.sendForm('service_byf4wzn', 'template_kyai4ri', form.current, 'ERXxIWNDUgZtO4K2P')
      .then((result) => {
          console.log(result.text);
          alert("Email sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className='contact'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="from_name" required />
        <label>Your Email</label>
        <input type="email" name="from_email" required />
        <label>Receiver's Email</label>
        <input type="email" name="to_email" required />
        <label>CC (Carbon Copy)</label>
        <input type="email" name="cc" />
        <label>Message</label>
        <textarea rows="4" cols="50" name="message" required />
        <input type="submit" value="Send" onClick={() => alert("We will Contact You Soon")}/>
      </form>
    </div>
  );
};

export default ContactUs;
