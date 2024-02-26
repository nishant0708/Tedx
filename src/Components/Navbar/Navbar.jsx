import React, { useRef, useState, useEffect } from 'react';
import "./Navbar.css";
import logoblack from '../Assests/Images/logo-black 1.png';
import Hamburger from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';

import logowhite from "../Assests/Images/logo-white 1.png"
const Navbar = () => {
  const [menu, setMenu] = useState(() => {
    // Get the menu item from local storage, if it exists
    return localStorage.getItem('selectedMenu') || "home";
  });
  const menuRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const location = useLocation();

  const [navTextColor, setNavTextColor] = useState('#000'); // Default text color
  const [navLogo, setNavLogo] = useState(logoblack); // Default logo

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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 800) {
        // Set initial state based on location
        if (location.pathname.includes('gallery')) {
          setNavTextColor('#fff'); // Set text color to white for gallery page
          setNavLogo(logowhite); // Set logo to the white logo for gallery page
        } else if (location.pathname.includes('sponsors')) {
          setNavTextColor('#fff'); // Set text color to white for sponsors page
          setNavLogo(logowhite); // Set logo to the white logo for sponsors page
        } else {
          setNavTextColor('#000'); // Set default text color
          setNavLogo(logoblack); // Set default logo
        }
      }
    }

    // Call handleResize initially
    handleResize();

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);

  const handleHamburgerClick = () => {
    setOpen(!isOpen);
    
    if (!isOpen) {
      menuRef.current.style.display = 'flex';
    } else {
      menuRef.current.style.display = 'hidden';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  //our team handler and sponsors handler
  // it reloads

  // const [reloadPage, setReloadPage] = useState(false);

  const handleReload = () => {
    window.scrollTo(0, 0);
  };


  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem);
    setOpen(false);
    scrollToTop();


    //change Navbar color

  //   if (menuItem === 'gallery') {
  //     setNavTextColor('#fff'); // Change text color to white
  //     setNavLogo(logowhite); // Change logo to the gallery logo
  //   } 
  //   else if(menuItem === 'sponsors'){
  //     setNavTextColor('#fff'); // Change text color to white
  //     setNavLogo(logowhite);
  //   }
  //   else {
  //     setNavTextColor('#000'); // Reset text color to default
  //     setNavLogo(logoblack); // Reset logo to the default logo
  //   }
  };
  const hamburgerColor = isOpen ? '#fff' : (location.pathname.includes('gallery') ? '#fff' : '#000');
  return (
    <div className="navbar">
      <div className='Nav-logo'>
        <img className="tedx-logo" src={navLogo} alt=''/>
        {isMobile && (
      <div className="fixed-hamburger">
        <Hamburger size={44} color={hamburgerColor} toggled={isOpen} toggle={handleHamburgerClick} />
      </div>
    )}
      </div>
      
     

      <ul ref={menuRef} className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <li onClick={() => handleMenuItemClick("home")} style={{ color: menu === "home" ? '#eb0028' : navTextColor, transition: "0.5s ease-out" }}><Link  style={{ textDecoration:'none',color: menu === "home" ? '#eb0028' : navTextColor, transition: "1s ease-out" }} to='/'><span  style={{ color: menu === "home" ? '#eb0028' : "", transition: "0.5s ease-out" }}>Home</span></Link> {menu === "home" ? <hr /> : <></>} </li>
        <li onClick={() => handleMenuItemClick("sponsors")} style={{ color: menu === "sponsors" ? '#eb0028' : navTextColor, transition: "0.5s ease-out" }}><Link  style={{ textDecoration:'none',color: menu === "sponsors" ? '#eb0028' : navTextColor, transition: "1s ease-out" }} to='/sponsors'><span style={{ color: menu === "sponsors" ? '#eb0028' : "", transition: "0.5s ease-out" }}>Sponsors</span></Link> {menu === "sponsors" ? <hr /> : <></>}</li>
        <li onClick={() => handleMenuItemClick("gallery")} style={{ color: menu === "gallery" ? '#eb0028' : navTextColor, transition: "0.5s ease-out" }}><Link  style={{ textDecoration:'none',color: menu === "gallery" ? '#eb0028' : navTextColor, transition: "1s ease-out" }} to='/gallery'><span style={{ color: menu === "gallery" ? '#eb0028' : "", transition: "0.5s ease-out" }}>Gallery</span></Link> {menu === "gallery" ? <hr /> : <></>}</li>
        <li onClick={() => handleMenuItemClick("teams")} style={{ color: menu === "teams" ? '#eb0028' : navTextColor, transition: "0.5s ease-out" }}><Link  style={{ textDecoration:'none',color: menu === "teams" ? '#eb0028' : navTextColor, transition: "1s ease-out" }} to='/teams'><span onClick={handleReload}  style={{ color: menu === "teams" ? '#eb0028' : "", transition: "0.5s ease-out" }}>Our Team</span> </Link>{menu === "teams" ? <hr /> : <></>}</li>
        <li className='con' onClick={() => { handleMenuItemClick("contact"); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) }} style={{ color: menu === "contact" ? '#eb0028' :  navTextColor, transition: "1s ease-out", cursor: 'pointer' }}><span style={{ color: menu === "contact" ? '#eb0028' : "", transition: "0.5s ease-out" }}>Contact Us</span> {menu === "contact" ? <hr /> : <></>}</li>
      </ul>
    </div>
  );
}

export default Navbar;
