import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import "./loaderflower.css";
export default function LoaderFlower() {
    const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    gsap.set(image, { opacity: 0, scale: 0.1, rotation: 0 });

    const tl = gsap.timeline({ repeat: -1, ease: "Power3" });
    tl.to(image, { duration: 3, opacity: 1, scale: 1, rotation: 360 });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="apploader">
      {/* <div className="flower"> */}
        <img src="./flower.png" alt="flower" ref={imageRef}/>
      {/* </div> */}
    </div>
  )
}
