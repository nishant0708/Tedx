
import './App.css';

import Loader from './Components/Loader/Loader';
import Footer from './Components/Footer/Footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import HeroParallax from "./pages/Gallery/hero-parallax"
import Main from "./Components/Main/Main";
import TeamSection from "./Components/shubhansh files/TeamSection"
import Subh from "./Components/Subhanshpage/Subh";

import React, { useState, useEffect } from 'react';
function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const productsData = [
    { title: '', link: '', thumbnail: "https://imgur.com/xhL7iFw.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/ylbeY3I.png" },
    { title: '', link: '', thumbnail: 'https://imgur.com/NUFlBwq.png' },
    { title: '', link: '', thumbnail: "https://imgur.com/MhndRuJ.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/XzRbvPx.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/gq8pguj.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/0Bhckd5.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/Zx353W2.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/c6hDt12.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/8qF1DmB.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/w6yEU83.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/F1lzuZ8.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/M3yIIND.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/UreBDRN.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/NUFlBwq.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/hj1Wwk5.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/E2XhfPT.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/p6tcGPl.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/dCvMOYS.png" },
    { title: '', link: '', thumbnail: "https://imgur.com/v6uPbJC.png" },
    { title: 'Aryan Vijayvargiya', link: '', thumbnail: "https://imgur.com/Qebc43j.png" },
    { title: 'Dr. Ragini Makkhar', link: '', thumbnail: "https://imgur.com/azvGCcl.png" },
    { title: 'Abhishek Mishra', link: '', thumbnail: "https://imgur.com/VB6xoI2.png" },
    { title: 'Bhaskar Indrakanti', link: '', thumbnail: "https://imgur.com/iV9tnue.png" },
    { title: 'Akshay Singh', link: '', thumbnail: "https://imgur.com/L2tS0Cz.png" },
    // Add more product data as needed
  ];
  
 
  
  useEffect(() => {
    // Simulate loading time for 5 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoaded(true);
      setShowLoader(false);
    }, 6000);

    // Check if content is loaded before the timeout
    window.onload = () => {
      setIsLoaded(true);
      // clearTimeout(loadingTimeout); // Cancel the timeout if content is loaded
    };

    // Clean up
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <div className="App">
      {showLoader && <Loader />} {/* Show Loader component if showLoader is true */}
      {!isLoaded && !showLoader && <Loader />} {/* Show Loader component until resources are loaded */}
      {isLoaded && !showLoader && 
      (
        <div className='hey'>
           <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/gallery' element={<HeroParallax products={productsData}/>}/>
        <Route path='/sponsors' element={<Subh/>}/>
        <Route path='/teams' element={<TeamSection/>}/>
        
      </Routes>
       <Footer/>
      </BrowserRouter>
          
        </div>
      )} {/* Show MainWebsite component if resources are loaded */}
     

    </div>

  );
}

export default App;