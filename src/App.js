
import './App.css';
import Forscrolldummy from './Components/Forscrolldummy';
import HeroPg from './Components/HeroPg/HeroPg';
import Thoughtloom from './Components/thoughtloom/Thoughtloom';
import TeamSection from './Components/TeamSection';
import SponsorsSection from './Components/SponsorsSection';
import SponsorMobileSection from './Components/SponsorSectionMobile';
import  { Breakpoint, BreakpointProvider } from 'react-socks';

function App() {
  return (
    <BreakpointProvider>
    <div className='App'>
      <HeroPg />
      {/* <Forscrolldummy/> */}

      <TeamSection/>

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
      
    </div>
    </BreakpointProvider>
  );
}

export default App;
