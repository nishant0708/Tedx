import React from 'react'
import HeroPg from "../HeroPg/HeroPg"
import Speakerf from '../nik-pages/Speakerf'
import Thoughtloom from '../thoughtloom/Thoughtloom'
import StickyScroll from "../../pages/questions/faq"
import FaqPage from '../../pages/questions/faqSection'
import Thoughtloom2 from '../thoughtloom/Thoughtloom2'
const Main = () => {
    
  return (
    <div>
        <HeroPg/>
        
        <Thoughtloom2/>
        <Speakerf/>
        <FaqPage/>
       
    
    </div>
  )
}

export default Main