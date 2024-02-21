import React from 'react'
import { Breakpoint,BreakpointProvider, } from 'react-socks'

import SponsorMobileSection from '../SponsorSectionMobile'
import SponsorsSection from '../SponsorsSection'



const Subh = () => {
  return (
    <BreakpointProvider>
    <div >
     
    

      
 
      
          

            <div className="sponsor_section-container">

                <Breakpoint medium up>
               <SponsorsSection/>
                
                </Breakpoint>

                <Breakpoint medium down>
                < SponsorMobileSection/>
                </Breakpoint>
            </div>
     
      

    </div>
    </BreakpointProvider>
  )
}

export default Subh