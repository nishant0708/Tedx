import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './whyus2.css';
gsap.registerPlugin(ScrollTrigger);

export default function Whyus2() {
  const whyUsRef = useRef(null);

  useEffect(() => {
    const ddElements = whyUsRef.current.querySelectorAll('dd');

    ddElements.forEach((dd) => {
      const firstBg = dd.querySelector('.text__first-bg');
      const word = dd.querySelector('.text__word');

      const tl = gsap.timeline({ delay: 1 });

      tl.to(firstBg, { duration: 0.5, scaleX: 1 })
        .to(word, { duration: 0.2, opacity: 1 }, '-=0.1')
        .to(firstBg, { duration: 0.8, scaleX: 0 });

      ScrollTrigger.create({
        trigger: dd, 
        start: 'top 90%', 
        end: 'bottom 20%', 
        animation: tl, 
        // markers: true,
        // stagger:1,
        once: true
      });
    });
  }, []);

  return (
    <div className="whyus2">
        <div className="heading">
            Why Partner With Us?
            
        </div>
      <dl className="text" ref={whyUsRef}>
        <dd>
          <span className="text__first">
            <span className="text__word">Highly engaged audience</span>
            <span className="text__first-bg"></span>
          </span>
        </dd>
        <br />
        <dd>
          <span className="text__first">
            <span className="text__word">Increase brand visibility</span>
            <span className="text__first-bg"></span>
          </span>
        </dd>
        <br />
        <dd>
          <span className="text__first">
            <span className="text__word">Support an important cause</span>
            <span className="text__first-bg"></span>
          </span>
        </dd>
        <br />
        <dd>
          <span className="text__first">
            <span className="text__word">Customized sponsorship packages</span>
            <span className="text__first-bg"></span>
          </span>
        </dd>
        <br />
        <dd>
          <span className="text__first">
            <span className="text__word">Brand association with TEDx</span>
            <span className="text__first-bg"></span>
          </span>
        </dd>
        <br />
        <dd>
          <span className="text__first">
            <span className="text__word">Positive brand image</span>
            <span className="text__first-bg"></span>
          </span>
        </dd>
        <br />
      </dl>
    </div>
  );
}
