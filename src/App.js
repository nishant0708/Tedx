import "./App.css"


import ContactUs from './Components/ContactUS/ContactUs';
import Trybox from "./Components/ContactUS/Trybox";

import Footer from './Components/Footer/Footer';


import Navbar from './Components/Navbar/Navbar';
import Speakersm from "./Components/Speakers-mobile/Speakersm";
import Speaker from "./Components/Speakers/Speaker";


import Portfolio from "./Components/Stry/SliderComponent";

import Ticket from './Components/Ticket/Ticket';
import Speakerf from "./Components/nik-pages/Speakerf";





function App() {

 

  return (
    <div  className='hey'>
      <Navbar/>
      <Trybox/>
    <Speakerf/>
      <Ticket/>
      <Ticket/>
     <Footer/> 
    </div>
  );
}

export default App;
