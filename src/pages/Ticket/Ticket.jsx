import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "./Ticket.css";
import backimg from "../../Images/Black Modern Event Concert Ticket (3).png";
import tedximg from "../../Images/4.png";
import barcode from "../../Images/5.png";
import arrow from "../../Images/down.png";
import mob_tic_back from "../../Images/mobile-back-ticket.png";
import text_ted from "../../Images/t e d d (1)-Photoroom.png-Photoroom.png";
import gsap from "gsap";

const Ticket = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  function redirect() {
    // Open redirect page in a new window/tab
    window.open('https://www.youtube.com');
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach((elem, index) => {
      const lines = elem.textContent.split('\n');
      elem.innerHTML = '';

      lines.forEach((line, lineIndex) => {
        const span = document.createElement('span');
        const i = document.createElement('i');
        i.textContent = line;
        span.appendChild(i);
        span.key = lineIndex;
        elem.appendChild(span);

        const node = elem.querySelector(`span:nth-child(${lineIndex + 1}) > i`);
        node.style.animationDelay = `${index * 0.2 * (72 / 55)}s`; // Adjusted animation delay
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, y: -20, duration: 0.5, ease: "power4.out" });
        }
      });
    }, { threshold: 0.5 });

    swiftUpElements.forEach(elem => {
      observer.observe(elem);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="mobile-ticket-card">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="mfront">
            <div className="mobilef">
              <h1 className="swift-up-text">GRAB</h1>
              <h1 className="swift-up-text">YOUR</h1>
              <h1 className="swift-up-text">TICKETS</h1>
              <h1 className="swift-up-text">Now</h1>
              <button className="get-details" onClick={handleClick}>Get ticket details</button>
            </div>
          </div>
          <div className="mback">
            <div className="mobile-ticket">
              <div className="mobile">
                <img className="mobile-back" onClick={handleClick} src={mob_tic_back} alt="" />
                <img onClick={handleClick} src={text_ted} className="tedx-m" />
                <p className="mdate"><span className="d">DATE :</span> XX/XX/XX</p>
                <p className="mtime"> <span className="d">Time :</span> XX pm</p>
                <p className="mvenue"><span className="d">Venue :</span>  Davv Auditorium</p>
                <button className="mbutton" onClick={redirect}>Buy Now</button>
              </div>
            </div>
          </div>
        </ReactCardFlip>
        </div>
      ) : (
        <div className="flip-card-container">
          <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div className="front">
                <h1 className="title">Grab your tickets now</h1>
              </div>
              <div className="back">
                <div className="ticket">
                  <img src={backimg} alt="" className="backimg" />
                  <p className={`back ${isFlipped ? "ticketno" : ""}`}>Ticket Number: 1635678965455</p>
                  <img src={tedximg} alt="" className="tedx-img" />
                  <div className="details">
                    <p>Venue:</p>
                    <p>Date:</p>
                    <p>Time:</p>
                  </div>
                  <div className="detailsa">
                    <p className={`back ${isFlipped ? "location" : ""}`}>
                      <span>DAVV Auditorium</span>
                    </p>
                    <p className={`back ${isFlipped ? "date" : ""}`}>
                      <span>DD/MM/YYYY</span>
                    </p>
                    <p className={`back ${isFlipped ? "time" : ""}`}>
                      <span>HH:MM:PP</span>
                    </p>
                  </div>
                  <p className={`back ${isFlipped ? "admit" : ""}`}>
                    <span>ADMIT ONE</span>
                  </p>
                  <button className={`back ${isFlipped ? "buynow" : ""}`}>
                    <img src={arrow} className="arrow" alt="arrow" />
                    <span className="buynow-text">Buy Now</span>
                  </button>
                  <img src={barcode} alt="" className="barcode" />
                  <div className="details1">
                    <p>Gate</p>
                    <p>Row</p>
                    <p>Seat</p>
                  </div>
                  <div className="f-details1">
                    <p>XX</p>
                    <p>XX</p>
                    <p>XX</p>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      )}
    </>
  );
};

export default Ticket;
