import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Thoughtloom.css';


const Thoughtloom = () => {
  const whitepathRef = useRef(null);
  const maskBoxRef = useRef(null);
  const maskBox2Ref = useRef(null);
  const circleRef = useRef(null);
  const jayRef = useRef(null);
  const svgPathRef = useRef(null);
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.jay',
        start: "top top", // Adjust the start position
        end: "bottom", // Adjust the end position
        scrub: true, // smooth animation
        pin: ".jay",
      }
    });
  
    tl.to([jayRef.current,maskBox2Ref.current,maskBoxRef.current], {
      backgroundColor: '#eb0028',
      // duration: 8, // Increase the duration to slow down the animation
    });
  
    tl.fromTo(circleRef.current,
      { scale: 0,
      x: -490 }, // From scale 0
      {
        scale: 0.6,
        x: -310,
        ease: "elastic.out(1.2,0.75)",// Add ease effect
        // delay:0,
      }
    );

    tl.to(maskBox2Ref.current, {
      x: "1500",
      ease: "power1.inOut",
      // delay:0,
      // duration: 8, // Increase the duration here
    });
  
    tl.to(maskBoxRef.current, {
      x: "2000", // move to the right
      ease: "power1.inOut",
      // delay:0,
      // duration: 8, // Increase the duration here
    });
  
    // Clean up ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className='scroller'>
      <div className='jay' ref={jayRef}>
        <div className='svg-container'>
          <div className='mask-box' ref={maskBoxRef}></div>
          <div className='rainbow'>
            <img src={process.env.PUBLIC_URL + '/assets/other/rainbow.png'} alt="rainbow"></img>
          </div>
          <div className='svg-draw'>
            <div className='whiteStroke'>
              <svg width="878" height="528" viewBox="0 0 800 500" fill="none">
                <path id="white-stroke" ref={whitepathRef} d="M3 10L3875 1218" stroke="white" strokeWidth="10" />
              </svg>
            </div>
            <div className='circle' ref={circleRef}>
              <svg width="263" height="263" viewBox="0 0 263 263" fill="none">
                <circle cx="131.5" cy="131.5" r="131.5" fill="#FFD116" fillOpacity="0.86"/>
              </svg>
            </div>
            <img className='person' src={process.env.PUBLIC_URL + '/assets/other/person.png'} alt="person"></img>
          </div>
          <div className='mask-box-2' ref={maskBox2Ref}></div>
        </div>
        <div className='thoughtloom-container'>
          <img src={process.env.PUBLIC_URL + '/assets/other/thoughtloom.png'}></img>
        </div>
        <div className='second-trigger'></div>
          <div className="container">
          <div className="text-box">
          <h1 class="reveal-text date">
            7 March 2024
          </h1>
          <h1 class="reveal-text place">
            Davv Auditorium
          </h1>
          <h1 class="reveal-text place2">
            Indore
          </h1>
          </div>
          <div className='top-text'>
          <h1 class="top-text">
          As the white light passes through a prism and splits itself into a range of colors, our brain deals with the unfinished and un- addressed thoughts and philosophies creating a “thought loom” which if left looming without comprehensive addressal can become a hurdle in ones intellectual abilities.
          </h1>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Thoughtloom;
