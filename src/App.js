import "./App.css"


import Footer from './Components/Footer/Footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import Trybox from "./Components/ContactUS/Trybox";

import HeroParallax from "./pages/Gallery/hero-parallax"
import Main from "./Components/Main/Main";





function App() {
  const productsData = [
    { title: 'Product 1', link: '', thumbnail: "https://imgur.com/xhL7iFw.png" },
    { title: 'Product 2', link: '', thumbnail: "https://imgur.com/ylbeY3I.png" },
    { title: 'Product 3', link: '', thumbnail: 'https://imgur.com/NUFlBwq.png' },
    { title: 'Product 4', link: '#', thumbnail: "https://imgur.com/MhndRuJ.png" },
    { title: 'Product 5', link: '#', thumbnail: "https://imgur.com/XzRbvPx.png" },
    { title: 'Product 6', link: '#', thumbnail: "https://imgur.com/gq8pguj.png" },
    { title: 'Product 7', link: '#', thumbnail: "https://imgur.com/0Bhckd5.png" },
    { title: 'Product 8', link: '#', thumbnail: "https://imgur.com/Zx353W2.png" },
    { title: 'Product 9', link: '#', thumbnail: "https://imgur.com/CzNn0fd.png" },
    { title: 'Product 10', link: '#', thumbnail: "https://imgur.com/3l7IorT.png" },
    { title: 'Product 11', link: '#', thumbnail: "https://imgur.com/w6yEU83.png" },
    { title: 'Product 12', link: '#', thumbnail: "https://imgur.com/F1lzuZ8.png" },
    { title: 'Product 13', link: '#', thumbnail: "https://imgur.com/UreBDRN.png" },
    { title: 'Product 14', link: '#', thumbnail: "https://imgur.com/M3yIIND.png" },
    { title: 'Product 15', link: '#', thumbnail: "https://imgur.com/NUFlBwq.png" },
    { title: 'Product 16', link: '#', thumbnail: "https://imgur.com/hj1Wwk5.png" },
    { title: 'Product 17', link: '#', thumbnail: "https://imgur.com/E2XhfPT.png" },
    { title: 'Product 18', link: '#', thumbnail: "https://imgur.com/p6tcGPl.png" },
    { title: 'Product 19', link: '#', thumbnail: "https://imgur.com/M3yIIND.png" },
    { title: 'Product 20', link: '#', thumbnail: "https://imgur.com/NUFlBwq.png" },
    { title: 'Product 21', link: '#', thumbnail: "https://imgur.com/NUFlBwq.png" },
    // Add more product data as needed
  ];
  
 
  const content = [
    {
      title: "What is Ted and what is Tedx?",
      description:
        "TEDx is a program created by TED (Technology, Entertainment, Design), a global platform known for its conferences featuring influential speakers and thought leaders. TEDx events are independently organized, community-driven gatherings licensed by TED. ",
    },
    {
      title: "What is the Theme of the event?",
      description:
        "The theme of TedxDavv2024 Thought loom. Which symbolizes a weaving of ideas and interconnected thoughts, akin to threads in a loom. It represents creation of an inspiring fabric that goes beyond individual perspectives, fostering a collective consciousness.",
    },
    {
      title: "What is the date and time of the Event?",
      description:
        "The TEDxDAVV 2024 event will take place on March 6 and March 7, 2024  from 4pm to 8pm.",
    },
    {
      title: "What language is spoken at the event?",
      description:
        "The languages spoken during the event are Hindi and English.",
      },
    {
      title: "What is the price of tickets?",
      description:
        "The price of the tickets are yet to be revealed.",
    },
    {
      title: "Are there different ticket types of packages available?",
      description:
        "Yes, there are but the diff ticket types of packages are yet to be announced.",
    },
  ];
 

  return (
    <div  className='hey'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/gallery' element={<HeroParallax products={productsData}/>}/>
        <Route path='/sponsors' element={<Trybox/>}/>
        <Route path='/teams' element={<Trybox/>}/>
        
      </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
