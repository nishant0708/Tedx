import "./App.css"


import Footer from './Components/Footer/Footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import Trybox from "./Components/ContactUS/Trybox";


import Main from "./Components/Main/Main";





function App() {

 

  return (
    <div  className='hey'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/gallery' element={<Trybox/>}/>
        <Route path='/sponsors' element={<Trybox/>}/>
        <Route path='/teams' element={<Trybox/>}/>
        
      </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
