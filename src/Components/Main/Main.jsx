import React from 'react'
import HeroPg from "../HeroPg/HeroPg"
import Speakerf from '../nik-pages/Speakerf'
import Thoughtloom from '../thoughtloom/Thoughtloom'
import StickyScroll from "../../pages/questions/faq"
import FaqPage from '../../pages/questions/faqSection'


const Main = () => {
    
  return (
    <div>
        <HeroPg/>
 
        <Thoughtloom/>
        <Speakerf/>
        <FaqPage/>
       
    
    </div>
  )
}

export default Main