import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './heropg.css';
import { useMediaQuery } from 'react-responsive';
import red from '../../pages/questions/redflower.png';
import white from '../../pages/questions/whiteflower.png';
import { Power1 } from 'gsap';


gsap.registerPlugin(ScrollTrigger);

export default function HeroPg() {
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const line4Ref = useRef(null);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const videoRef1 = useRef(null);
    const redflowerRef = useRef(null);
    const heroTextRef = useRef(null);
    const imgRef = useRef(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        
        
        const handleScroll = () => {
            const firstPageHeight = document.querySelector('.heropg').clientHeight;
            const scrollPosition = window.scrollY;
            const triggerPoint = firstPageHeight * 1; // Adjust trigger point as needed
            
            // Calculate opacity based on scroll position
            let newOpacity = scrollPosition / triggerPoint;
            newOpacity = Math.min(newOpacity, 0.8); // Ensure opacity doesn't exceed 1
            newOpacity = Math.max(newOpacity, 0.09); // Ensure opacity doesn't go below 0
            setOpacity(newOpacity);
        };

        handleScroll(); // Initial call to set initial opacity
        
        window.addEventListener("scroll", handleScroll);
        if (opacity < 1) {
            ScrollTrigger.create({
                trigger: ".heropg",
                start: "top top",
                end: "bottom top",
                pin: true,
            });
        } else {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
        
        const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
        const tx = gsap.timeline({ defaults: { ease: 'power1.out' } });
        // tl.set('.hero-text', { opacity: 0 }) // Set initial opacity to 0
        tx.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, y: 0, duration: 0.8 })
        tx.fromTo(videoRef1.current, { opacity: 0 }, { opacity: 1, y: 0, duration: 1 })
        tl.fromTo('.hero-text', { opacity: 0 }, { opacity: 1, duration: 0.01 })
        tl.fromTo('.line1', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 })
        .fromTo('.line2', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.line3', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.line4', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.subliner', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 })
        .fromTo('.tedxlogo', { opacity: 0 }, { opacity: 1, duration: 0.7 });
if (isMobile){

    gsap.set(".herowhiteflower img", { opacity: 0, scale: 0.1, rotation: 0 });
    
    const t1 = gsap.timeline({ease: "Power3" });
    t1.to(".herowhiteflower img", { duration: 4, opacity: 1, scale: 1, rotation: 270, delay:1.5 });
    
        gsap.set(".heroredflower img", { opacity: 0, scale: 0.1, rotation: 0 });

        const t2 = gsap.timeline({ease: "Power3" });
        t2.to(".heroredflower img", { duration: 2.5, opacity: 1, scale: 1, rotation: 180,delay:2 });

        gsap.set("#heroyellow2", { scaleX: 0.01 });
        
        const t3 = gsap.timeline({ ease: "Power3" });
        t3.to("#heroyellow2", {scaleX: 1,  // Scale to full width
        duration: 2, delay: 0.5});
    }

        return () => {
            tl.kill(); // Clean up animation when component unmounts
            // ts.kill(); // Clean up animation when component unmounts
            window.removeEventListener("scroll", handleScroll);

        };
    }, []);

    return (
        <div className="heropg" ref={containerRef}>
            <div className="lineimg">
                <img ref={imgRef} src="./Black.png" alt="lines"
                    // style={{ opacity: 0 }}
                    style={{ opacity: opacity }}

                />

            </div>
                {!isMobile && (
            <div className="hero-video" ref={videoRef}>

                    <video autoPlay loop muted ref={videoRef1}>
                        {/* <video muted > */}
                        <source src='/aunty.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                )}

               

            <div className="hero-text" ref={heroTextRef}>

                    <div className="mainliner poppins-black">
                        <div className="line1" ref={line1Ref}>Thoughts </div>
                        <div className="line2" ref={line2Ref}>dance on</div>
                        <div className="line3" ref={line3Ref}>the edge</div>
                        <div className="line4" ref={line4Ref}>of <span className='redtext'> chaos.</span> </div>
                    </div>
            
                {isMobile && (
                    <div className='flower'>
                        <div id='herowhiteflower' className="herowhiteflower">

                            <img src={white} />
                        </div>
                        <div ref={redflowerRef} id='heroredflower' className="heroredflower">

                            <img src={red} />
                        </div>
                        <div className="heroyellow2"><hr id="heroyellow2"></hr></div>
                    </div>
                )}
                <div className="subliner poppins-regular">
                    Discover your inner strife with <br /> <span className='bold'>TEDxDAVV : ThoughtLoom </span>
                </div>
                <div className="tedxlogo">
                    <img src='/tedxlogo/logo-black.png' alt='tedxlogoblack' />
                </div>
            </div>
        </div>
    );
}