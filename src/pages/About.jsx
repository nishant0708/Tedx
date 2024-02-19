import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css'
gsap.registerPlugin(ScrollTrigger)

export default function About({title, desc}) {
    const reveal = useRef(null);
    const text = useRef(null);
    const contain = useRef(null);

    useEffect(() => {
        const revealText = () => {
            const textElement = reveal.current;

            textElement.innerHTML = textElement.textContent
                .split(" ")
                .map((word) => `<span class="word">${word} </span>`)
                .join("");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contain.current,
                    start: "top top",
                    // end: "+=8000 bottom",
                    scrub: true,
                    stagger: 0.01,
                    // opacity: 1, // Fade in
                    duration: 2, // Adjust the duration of the animation
                    ease: "power1.inOut", // Smooth transition
                    markers: true,
                    pin: true
                }
            });

            gsap.utils.toArray(".word").forEach((word) => {
                tl.to(word, {
                    className: "active",
                    opacity: 1, // Fade in
                    duration: 2, // Adjust the duration of the animation
                    ease: "power1.inOut", // Smooth transition            
                });
            });
        };

        revealText();

        return () => {
            // Clean up the animation if needed
        };
    }, []);
    return (
        <div className="about">
            <div className="headcontainer" ref={contain}>

                <div className="heading-a">
                    {title}
                </div>

                <div className="text-container" ref={text}>
                    <p className="reveal-text" ref={reveal}>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}