
import './App.css';
import Forscrolldummy from './Components/Forscrolldummy';
import HeroPg from './Components/HeroPg/HeroPg';
import Loader from './Components/Loader/Loader';
import LoaderFlower from './Components/Loader/LoaderFlower';
import Thoughtloom from './Components/thoughtloom/Thoughtloom';
import React, { useState, useEffect } from 'react';
function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for 5 seconds
    const loadingTimeout = setTimeout(() => {
      // setIsLoaded(true);
      setShowLoader(false);
    }, 3000);

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
      {showLoader && <LoaderFlower />} {/* Show Loader component if showLoader is true */}
      {!isLoaded && !showLoader && <LoaderFlower />} {/* Show Loader component until resources are loaded */}
      {isLoaded && !showLoader && 
      (
        <div>
          <HeroPg />
          {/* <Forscrolldummy/> */}
          <Thoughtloom />
          {/* <Forscrolldummy/> */}
        </div>
      )} {/* Show MainWebsite component if resources are loaded */}
     

    </div>

  );
}

export default App;
