import React, { useRef, useState, useEffect } from 'react';
import "./Navbar.css";
import logo from '../Assests/Images/logo-black 1.png';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  const handleHamburgerClick = () => {
    setOpen(!isOpen);
    
    if (!isOpen) {
      menuRef.current.style.display = 'flex';
    } else {
      menuRef.current.style.display = 'none';
    }
  };

  return (
    <div className="navbar">
      <div className='Nav-logo'>
        <img className="tedx-logo" src={logo} alt=''/>
        {isMobile && (
        <Hamburger className='nav-ham' size={44} color="#000" z-index={15} toggled={isOpen} toggle={handleHamburgerClick} />
      )}
      </div>
      
     

      <ul ref={menuRef} className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li onClick={() => { setMenu("home") }} style={{ color: menu === "home" ? '#eb0028' : 'inherit', transition: "1s ease-out" }}><span>Home</span> {menu === "home" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("about") }} style={{ color: menu === "about" ? '#eb0028' : 'inherit', transition: "1s ease-out" }}><span>About</span> {menu === "about" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("gallery") }} style={{ color: menu === "gallery" ? '#eb0028' : 'inherit', transition: "1s ease-out" }}><span>Gallery</span> {menu === "gallery" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("team") }} style={{ color: menu === "team" ? '#eb0028' : 'inherit', transition: "1s ease-out" }}><span>Our Team</span> {menu === "team" ? <hr /> : <></>}</li>
        <li className='con' onClick={() => { setMenu("contact") }} style={{ color: menu === "contact" ? '#eb0028' : 'inherit', transition: "1s ease-out" }}><span>Contact Us</span> {menu === "contact" ? <hr /> : <></>}</li>
      </ul>
    </div>
  );
}

export default Navbar;
