import React from 'react'
import HeroPg from "../HeroPg/HeroPg"
import Speakerf from '../nik-pages/Speakerf'
import Thoughtloom from '../thoughtloom/Thoughtloom'
import StickyScroll from "../../pages/questions/faq"
import FaqPage from '../../pages/questions/faqSection'
import Thoughtloom2 from '../thoughtloom/Thoughtloom2'

// import Mehnat from "../jay mc/Mehnat";

const Main = () => {
    
  return (
    <div>
        <HeroPg/>
        <Thoughtloom />
        <Speakerf/>
        <FaqPage/>
    
    </div>
  )
}

export default Main