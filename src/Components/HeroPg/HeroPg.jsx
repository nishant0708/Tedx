import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ReactComponent as MySVG } from '../images/Black.svg';
// import MySVG from './mysvg';
import './heropg.css';
import { useMediaQuery } from 'react-responsive';
// import './svgani.css';
gsap.registerPlugin(ScrollTrigger);

export default function HeroPg() {
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const line4Ref = useRef(null);
    const videoRef = useRef(null);
    const svgRef = useRef(null);
    const heroTextRef = useRef(null);
    // const whitepathRef = useRef(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    useEffect(() => {
        // const drawPath = () => {
        //     const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        //     const whitepathLength = whitepathRef.current.getTotalLength();
        //     whitepathRef.current.style.strokeDasharray = whitepathLength;
        //     whitepathRef.current.style.strokeDashoffset = whitepathLength - (whitepathLength * scrollPercentage);
        // };

        // drawPath(); // Initial call to draw the SVG path

        // GSAP ScrollTrigger to update the drawing on scroll
        // const ts = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: whitepathRef.current,
        //         start: "top center",
        //         end: "bottom center",
        //         scrub: true
        //     }
        // });

        // ts.to(whitepathRef.current.style, { strokeDashoffset: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'power1.out', opacity: 0 } });

        tl.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, y: 0, duration: 1.5 })
        tl.fromTo('.hero-text', { opacity: 0 }, { opacity: 1, duration: 1 })
        tl.fromTo('.line1', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.8 })
            .fromTo('.line2', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.7 })
            .fromTo('.line3', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.7 })
            .fromTo('.line4', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.7 })
            .fromTo('.subliner', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 })
            .fromTo('.tedxlogo', { opacity: 0 }, { opacity: 1, duration: 1 });
        return () => {
            tl.kill(); // Clean up animation when component unmounts


        };
    }, []);

    return (
        <div className="heropg">
            {/* <div className="svg-container"> */}
                {/* <MySVG /> */}
            {/* </div> */}
            <div className="hero-video" ref={videoRef}>
                <video autoPlay loop muted ref={videoRef}>
                    {/* <video muted > */}
                    <source src='/ff.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="hero-text" ref={heroTextRef}>
                {!isMobile && (

                    <div className="mainliner poppins-black">
                        <div className="line1" ref={line1Ref}>Thoughts </div>
                        <div className="line2" ref={line2Ref}>dance on</div>
                        <div className="line3" ref={line3Ref}>the edge</div>
                        <div className="line4" ref={line4Ref}>of <span className='redtext'> chaos.</span> </div>
                    </div>
                )}
                {isMobile && (
                    <div className="mainliner poppins-black">
                        <div className="line1" ref={line1Ref} style={{ whiteSpace: 'nowrap' }}>Thoughts dance</div>
                        <div className="line2" ref={line2Ref}>on the edge</div>
                        {/* <div className="line3" ref={line3Ref}>the edge</div> */}
                        <div className="line3" ref={line3Ref}>of <span className='redtext'> chaos.</span> </div>
                    </div>
                )}
                <div className="subliner poppins-regular" style={{ whiteSpace: 'nowrap' }}>
                    Discover your inner strife with <br /> <span className='bold'>TEDxDAVV : ThoughtLoom </span>
                </div>
                <div className="tedxlogo">
                    <img src='/tedxlogo/logo-black.png' alt='tedxlogoblack' />
                </div>
            </div>
        </div>
    );
}
