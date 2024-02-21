import React from 'react'
import { useEffect,useState } from 'react';
import "./Speakerf.css"
import SliderComponent from '../Stry/SliderComponent';
import Speakersm from '../Speakers-mobile/Speakersm';


const Speakerf = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 800);
        };
    
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <div>
    {isSmallScreen ?<Speakersm/> : <SliderComponent /> }
    
    </div>
  )
}

export default Speakerf