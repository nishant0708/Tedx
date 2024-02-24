import React from 'react'
import { Breakpoint,BreakpointProvider, } from 'react-socks'

import SponsorMobileSection from '../shubhansh files/SponsorSectionMobile'
import SponsorsSection from '../shubhansh files/SponsorsSection'



const Subh = () => {
  return (
    <BreakpointProvider>
    <div >
     
    

      
 
      
          

            <div className="sponsor_section-container">

                <Breakpoint customQuery="(min-width: 769px)">
               <SponsorsSection/>
                
                </Breakpoint>

                <Breakpoint customQuery="(max-width: 768px)">
                < SponsorMobileSection/>
                </Breakpoint>
            </div>
     
      

    </div>
    </BreakpointProvider>
  )
}

export default Subh