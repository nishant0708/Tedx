import { BreakpointProvider, Breakpoint } from "react-socks";
import TeamSection from "./TeamSection";
import SponsorMobileSection from "./SponsorSectionMobile";
import SponsorsSection from "./SponsorsSection";

export default function ShubhanshContent(){

    return(
        <BreakpointProvider >
        <div>
            <TeamSection />

            <div className="sponsor_section-container">

                <Breakpoint medium up>
                <SponsorsSection />
                
                </Breakpoint>

                <Breakpoint medium down>
                <SponsorMobileSection />
                </Breakpoint>
            </div>
        </div>
        </BreakpointProvider>
    )
}