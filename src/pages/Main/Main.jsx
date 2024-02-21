import React from 'react'
import Navbar from '../Navbar/Navbar'
import MergedPage from '../../component/MergedPage'
import Footer from '../Footer/Footer'
import Ticket from '../Ticket/Ticket'
import Whyus2 from '../Whyus2'
import "./Main.css"
import StickyScroll from '../questions/faq';

const Main = () => {
  const content = [
    {
      title: "What is Ted and what is Tedx?",
      description:
        "TEDx is a program created by TED (Technology, Entertainment, Design), a global platform known for its conferences featuring influential speakers and thought leaders. TEDx events are independently organized, community-driven gatherings licensed by TED. ",
    },
    {
      title: "What is the Theme of the event?",
      description:
        "The theme of TedxDavv2024 Thought loom. Which symbolizes a weaving of ideas and interconnected thoughts, akin to threads in a loom. It represents creation of an inspiring fabric that goes beyond individual perspectives, fostering a collective consciousness.",
    },
    {
      title: "What is the date and time of the Event?",
      description:
        "The TEDxDAVV 2024 event will take place on March 6 and March 7, 2024  from 4pm to 8pm.",
    },
    {
      title: "What language is spoken at the event?",
      description:
        "The languages spoken during the event are Hindi and English.",
      },
    {
      title: "What is the price of tickets?",
      description:
        "The price of the tickets are yet to be revealed.",
    },
    {
      title: "Are there different ticket types of packages available?",
      description:
        "Yes, there are but the diff ticket types of packages are yet to be announced.",
    },
  ];


  return (
    <div className='main'>
        
        <MergedPage/>
        <Whyus2/>
        <Ticket/>
        <StickyScroll content={content}/>
    </div>
  )
}

export default Main