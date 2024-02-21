
import './App.css';
import Forscrolldummy from './Components/Forscrolldummy';
import HeroPg from './Components/HeroPg/HeroPg';
import Loader from './Components/Loader/Loader';
import Thoughtloom from './Components/thoughtloom/Thoughtloom';
import React, { useState, useEffect } from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const loadingIcon = document.querySelector('.loading-icon');
      loadingIcon.classList.add('zoom');

      // Remove the "zoom" class after animation completes
      setTimeout(() => {
        loadingIcon.classList.remove('zoom');
      }, 2000);
    }
  }, [isLoading]);

  return (
    <div className="App">
      <Loader isLoading={isLoading} />
      {!isLoading && <div>
        {/* <Loader /> */}
        <HeroPg />
        {/* <Forscrolldummy/> */}
        <Thoughtloom />
        {/* <Forscrolldummy/> */}</div>}
    </div>

  );
}

export default App;
