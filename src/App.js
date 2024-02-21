
import './App.css';
import Forscrolldummy from './Components/Forscrolldummy';
import HeroPg from './Components/HeroPg/HeroPg';
import Loader from './Components/Loader/Loader';
import LoaderFlower from './Components/Loader/LoaderFlower';
import Thoughtloom from './Components/thoughtloom/Thoughtloom';
import React, { useState, useEffect } from 'react';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if all resources are loaded
    window.onload = () => {
      setIsLoaded(true);
    };
  }, []);
  return (
    <div className="App">
      {!isLoaded ? (
        <LoaderFlower /> // Show Loader component if resources are not loaded
      ) : (
        <div>
        <HeroPg />
        {/* <Forscrolldummy/> */}
        <Thoughtloom />
        {/* <Forscrolldummy/> */}</div>
      )}

    </div>

  );
}

export default App;
