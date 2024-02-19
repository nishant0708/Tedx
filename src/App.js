import "./App.css"
import Navbar from "./pages/Navbar/Navbar"
import Ticket from './pages/Ticket/Ticket';
import Footer from "./pages/Footer/Footer"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MergedPage from './component/MergedPage';
import SpeakerPage from './component/SpeakerPage';
import HeroParallax from './pages/Gallery/hero-parallax';
import samarth from './Images/reel2.jpg';
import Whyus2 from './pages/Whyus2';
import Flip from './pages/Flip';
import Teams from './components/Teams';
import Header from './components/Header';
import Years from './components/Years';
import data from './cardData.json';
import { useState } from 'react';
import ShubhanshTeams from "./ShubhanshTeams";
import Main from "./pages/Main/Main";
import HeroParallax2 from "./pages/Gallery/hero-parallax-mobile";
import StickyScroll from "./pages/questions/faq";
import StickyScroll2 from "./pages/questions/mobile/faq-mobile";
import { Breakpoint, BreakpointProvider } from "react-socks";


function App() {
  const productsData = [
    { title: 'Product 1', link: '', thumbnail: samarth },
    { title: 'Product 2', link: '', thumbnail: samarth },
    { title: 'Product 3', link: '', thumbnail: samarth },
    { title: 'Product 4', link: '#', thumbnail: samarth },
    { title: 'Product 5', link: '#', thumbnail: samarth },
    { title: 'Product 6', link: '#', thumbnail: samarth },
    { title: 'Product 7', link: '#', thumbnail: samarth },
    { title: 'Product 8', link: '#', thumbnail: samarth },
    { title: 'Product 9', link: '#', thumbnail: samarth },
    { title: 'Product 10', link: '#', thumbnail: samarth },
    { title: 'Product 11', link: '#', thumbnail: samarth },
    { title: 'Product 12', link: '#', thumbnail: samarth },
    { title: 'Product 13', link: '#', thumbnail: samarth },
    { title: 'Product 14', link: '#', thumbnail: samarth },
    { title: 'Product 15', link: '#', thumbnail: samarth },
    { title: 'Product 16', link: '#', thumbnail: samarth },
    { title: 'Product 17', link: '#', thumbnail: samarth },
    { title: 'Product 18', link: '#', thumbnail: samarth },
    { title: 'Product 19', link: '#', thumbnail: samarth },
    { title: 'Product 20', link: '#', thumbnail: samarth },
    { title: 'Product 21', link: '#', thumbnail: samarth },
    // Add more product data as needed
  ];
  const [info ,setInfo] = useState(data);

  // console.log(info);
  let coreTeam = info[2024]['Core Team'];
  // console.log(coreTeam);

  let webDev = info[2024]['Web Dev Team'];
  // console.log(webDev);
 
  const content = [
    {
      title: "What is Ted and what is Tedx?",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
      title: "What is the Theme of the event?",
      description:
        "Thought Loom",
    },
    {
      title: "What is the date and time of the Event?",
      description:
        "The preshow is going to be held on 6th of March 2024 at 15:00p.m. The main event is going to be held on 7th of March 2024 at 12:00p.m.",
    },
    {
      title: "What language is spoken at the event?",
      description:
        "English and HIndi",
      },
    {
      title: "What is the price of tickets?",
      description:
        "50/-",
    },
    {
      title: "Are there different ticket types of packages available?",
      description:
        "50/-",
    },
  ];

  return (
    <div  className=''>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<Flip/>}/>
        <Route path='/gallery' element={<StickyScroll content={content}/>}/>
        <Route path='/teams' element={<ShubhanshTeams/>}/>
        
      </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;