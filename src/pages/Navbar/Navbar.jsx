import React, { useRef, useState, useEffect } from 'react';
import "./Navbar.css";
import logo from '../../Images/logo-white 1.png';
import Hamburger from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(() => {
    // Get the menu item from local storage, if it exists
    return localStorage.getItem('selectedMenu') || "home";
  });
  const menuRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update menu state when location changes
    setMenu(location.pathname.slice(1) || "home");
  }, [location]);

  useEffect(() => {
    // Save selected menu item to local storage
    localStorage.setItem('selectedMenu', menu);
  }, [menu]);

  const handleHamburgerClick = () => {
    setOpen(!isOpen);
    
    if (!isOpen) {
      menuRef.current.style.display = 'flex';
    } else {
      menuRef.current.style.display = 'none';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem);
    setOpen(false);
    scrollToTop();
  };

  return (
    <div className="navbar">
      <div className='Nav-logo'>
        <img className="tedx-logo" src={logo} alt=''/>
      </div>
      
      {isMobile && (
        <Hamburger className='nav-ham' size={24} color="#fff" toggled={isOpen} toggle={handleHamburgerClick} />
      )}

      <ul ref={menuRef} className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li onClick={() => handleMenuItemClick("home")} style={{ color: menu === "home" ? '#eb0028' : 'inherit', transition: "0.5s ease-out" }}><Link  style={{ textDecoration:'none',color: menu === "home" ? '#eb0028' : 'inherit', transition: "1s ease-out" }} to='/'><span>Home</span></Link> {menu === "home" ? <hr /> : <></>} </li>
        <li onClick={() => handleMenuItemClick("about")} style={{ color: menu === "about" ? '#eb0028' : 'inherit', transition: "0.5s ease-out" }}><Link  style={{ textDecoration:'none',color: menu === "about" ? '#eb0028' : 'inherit', transition: "1s ease-out" }} to='/about'><span>About</span></Link> {menu === "about" ? <hr /> : <></>}</li>
        <li onClick={() => handleMenuItemClick("gallery")} style={{ color: menu === "gallery" ? '#eb0028' : 'inherit', transition: "0.5s ease-out" }}><Link  style={{ textDecoration:'none',color: menu === "gallery" ? '#eb0028' : 'inherit', transition: "1s ease-out" }} to='/gallery'><span>Gallery</span></Link> {menu === "gallery" ? <hr /> : <></>}</li>
        <li onClick={() => handleMenuItemClick("teams")} style={{ color: menu === "teams" ? '#eb0028' : 'inherit', transition: "0.5s ease-out" }}><Link  style={{ textDecoration:'none',color: menu === "teams" ? '#eb0028' : 'inherit', transition: "1s ease-out" }} to='/teams'><span>Our Team</span> </Link>{menu === "teams" ? <hr /> : <></>}</li>
        <li className='con' onClick={() => { handleMenuItemClick("contact"); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) }} style={{ color: menu === "contact" ? '#eb0028' : 'inherit', transition: "1s ease-out", cursor: 'pointer' }}><span>Contact Us</span> {menu === "contact" ? <hr /> : <></>}</li>
      </ul>
    </div>
  );
}

export default Navbar;

