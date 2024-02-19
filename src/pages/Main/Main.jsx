import React from 'react'
import Navbar from '../Navbar/Navbar'
import MergedPage from '../../component/MergedPage'
import Footer from '../Footer/Footer'
import Ticket from '../Ticket/Ticket'
import Whyus2 from '../Whyus2'
import "./Main.css"

const Main = () => {
  return (
    <div className='main'>
        
        <MergedPage/>
        <Whyus2/>
        <Ticket/>
        
    </div>
  )
}

export default Main