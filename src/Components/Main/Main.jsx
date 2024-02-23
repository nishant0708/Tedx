import React from 'react'
import HeroPg from "../HeroPg/HeroPg"
import Speakerf from '../nik-pages/Speakerf'
import Thoughtloom from '../thoughtloom/Thoughtloom'
import StickyScroll from "../../pages/questions/faq"
import FaqPage from '../../pages/questions/faqSection'
// import Mehnat from "../jay mc/Mehnat";

const Main = () => {
    
  return (
    <div>
        <HeroPg/>
    {/* <Mehnat /> */}
        <Thoughtloom/>
        <Speakerf/>
        <FaqPage/>
       
    
    </div>
  )
}

export default Main