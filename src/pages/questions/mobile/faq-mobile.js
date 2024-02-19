import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from './styleMobile.module.css';
import faq from "../FAQs.png";
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineMax } from "gsap/gsap-core";
import { TweenLite } from "gsap/gsap-core";
import { Power3 } from "gsap";
import red from '../redflower.png';
import white from '../whiteflower.png';




gsap.registerPlugin(ScrollTrigger);
const StickyScroll2 = ({ content }) => {
  
  
  
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [boldQuestionIndex, setBoldQuestionIndex] = useState(null);
  const [scrollTriggeredIndex, setScrollTriggeredIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const pinRef = useRef(null);

  const handleButtonClick = (index) => {
    setSelectedQuestionIndex(index);
    setBoldQuestionIndex(index);
    const divName = "yes"+index;
  }
    
  



  useEffect(() => {
    const questions = document.querySelectorAll(`.${styles.Question} button`);
    const buttons = Array.from(questions);

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        setScrollTriggeredIndex(index);
      });
    });

    
  }, []);

//   useEffect(() => {
//     gsap.to("#whiteflower", {
//       y: 150,
//       x: 140,
//       width: 300,
//       opacity: 1,
//       rotate: -60,
//       scrollTrigger: "#faq",
//       duration: 1,
//       ease: Power1.easeOut,
//     }).then(() => {
//       const tlCan = new TimelineMax({ repeat: -1 });
//       tlCan
//         .to('#whiteflower', 3, { y: '+=40', x: '+=20', rotation: '-=10', ease: Power1.easeInOut })
//         .to('#whiteflower', 2, { y: '-=30', x: '-=20', rotation: '-=10', ease: Power1.easeInOut })
//         .to('#whiteflower', 3, { y: '+=20', rotation: '+=10', ease: Power1.easeInOut })
//         .to('#whiteflower', 3, { y: '-=20', rotation: '+=10', ease: Power1.easeInOut })
//         .to('#whiteflower', 3, { y: '-=50', ease: Power1.easeInOut })
//         .to('#whiteflower', 3, { y: '+=50', ease: Power1.easeInOut })
//         .to('#whiteflower', 3, { y: '+=30', ease: Power1.easeInOut })
//         .to('#whiteflower', 3, { y: '-=30', ease: Power1.easeInOut })
//         .to('#whiteflower', 2, { y: '+=30', ease: Power1.easeInOut })
//         .to('#whiteflower', 2, { y: '-=30', ease: Power1.easeInOut });
//       TweenLite.to(tlCan, 27, { ease: Power1.easeInOut });
//     });
// }, []);

  
  
// useEffect(() => {
//   gsap.to("#redflower", {
//     x: 530,
//     width: 400,
//     opacity: 1,
//     rotate: 30,
//     scrollTrigger: "#faq",
//     duration: 1,
//     ease: Power1.easeOut,
//   }).then(() => {
//     const tlCan = new TimelineMax({ repeat: -1 });
//     tlCan
//       .to('#redflower', 3, { y: '-=30', x: '+=20', rotation: '-=5', ease: Power1.easeInOut })
//       .to('#redflower', 2, { y: '+=30', x: '-=20', rotation: '-=5', ease: Power1.easeInOut })
//       .to('#redflower', 3, { y: '-=20', rotation: '+=5', ease: Power1.easeInOut })
//       .to('#redflower', 3, { y: '+=20', rotation: '+=5', ease: Power1.easeInOut })
//       .to('#redflower', 3, { y: '-=50', ease: Power1.easeInOut })
//       .to('#redflower', 3, { y: '+=50', ease: Power1.easeInOut })
//       .to('#redflower', 3, { y: '-=30', ease: Power1.easeInOut })
//       .to('#redflower', 3, { y: '+=30', ease: Power1.easeInOut })
//       .to('#redflower', 2, { y: '-=30', ease: Power1.easeInOut })
//       .to('#redflower', 2, { y: '+=30', ease: Power1.easeInOut });
//     TweenLite.to(tlCan, 27, { ease: Power1.easeInOut });
//   });
// }, []);


  // useEffect(() => {
  //   gsap.to("#answers", {
  //     x:300,
  //     opacity:1,
  //     scrollTrigger: "#faq",
  //     duration: 1,
  //     ease: Power1.easeOut,
    
      
  //   }).then(() => {
  //     gsap.to("#answers", {
  //       x:350,
  //       opacity:1,
  //       scrollTrigger: "#faq",
  //       duration: 1,
  //       ease: Power1.easeOut,
      
        
  //     });
  //   });
    
  // }, []);

  // useEffect(() => {
  //   gsap.to("#yellow", {
  //     width:20,
  //     opacity:1,
  //     scrollTrigger: "#faq",
  //     duration: 1,
  //     ease: Power1.easeOut,
    
  //   });
    
  // }, []);

  // useEffect(() => {
  //   gsap.to("#yellow2", {
  //     width:20,
  //     x:20,
  //     opacity:1,
  //     scrollTrigger: "#faq",
  //     duration: 1,
  //     ease: Power1.easeOut,
    
  //   });
    
  // }, []);
  
  // useEffect(() => {
  //   gsap.to("#faq", {
  //     y:300,
  //     opacity:1,
  //     scrollTrigger: "#faq",
  //     duration: 0.5,
  //     ease: Power3.easeOut,
  //   });
  // }, []);
  
  // useEffect(() => {
  //   // Animate buttons one by one
  //   gsap.to(
  //     '#yes1',
  //     {
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: "#faq",
  //       opacity:1,// Adjust this value for the stagger effect
  //       ease: 'power3.out', // Adjust ease as needed
  //     }
  //   );
  // }, [content]);
  // useEffect(() => {
  //   // Animate buttons one by one
  //   gsap.to(
  //     '#yes2',
  //     {
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: "#faq",
  //       opacity:1,// Adjust this value for the stagger effect
  //       ease: 'power3.out',
  //       delay: 0.3,
  //        // Adjust ease as needed
  //     }
  //   );
  // }, [content]);

  // useEffect(() => {
  //   // Animate buttons one by one
  //   gsap.to(
  //     '#yes3',
  //     {
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: "#faq",
  //       opacity:1,// Adjust this value for the stagger effect
  //       ease: 'power3.out',
  //       delay: 0.6,
  //        // Adjust ease as needed
  //     }
  //   );
  // }, [content]);

  // useEffect(() => {
  //   // Animate buttons one by one
  //   gsap.to(
  //     '#yes4',
  //     {
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: "#faq",
  //       opacity:1,// Adjust this value for the stagger effect
  //       ease: 'power3.out',
  //       delay: 0.9,
  //        // Adjust ease as needed
  //     }
  //   );
  // }, [content]);

  // useEffect(() => {
  //   // Animate buttons one by one
  //   gsap.to(
  //     '#yes5',
  //     {
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: "#faq",
  //       opacity:1,// Adjust this value for the stagger effect
  //       ease: 'power3.out',
  //       delay: 1.2,
  //        // Adjust ease as needed
  //     }
  //   );
  // }, [content]);

  // useEffect(() => {
  //   // Animate buttons one by one
  //   gsap.to(
  //     '#yes6',
  //     {
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: "#faq",
  //       opacity:1,// Adjust this value for the stagger effect
  //       ease: 'power3.out',
  //       delay: 1.5,
  //        // Adjust ease as needed
  //     }
  //   );
  // }, [content]);





  return (
    <div>
      <div className=" h-screen w-screen text-9xl bg-slate-500 grid text-center justify-center"><h1>Next Page</h1></div>
    
      <div  className={styles.hero}>
        <div className={styles.left}>
          <div id='whiteflower'className={styles.whiteflower}>
            
            <motion.img src={white} />
          </div>
          <div id='redflower' className={styles.redflower}>
            
            <motion.img src={red} />
          </div>
          <div className={styles.yellow1} ><hr id="yellow"></hr></div>
          <div className={styles.yellow2}><hr id="yellow2"></hr></div>
          <div id='answers' className={styles.Answers}>
            {selectedQuestionIndex !== null && (
              <p>{content[selectedQuestionIndex].description}</p>
            )}
          </div>
          <div id="faq" className={styles.faq}>
          <img src={faq} alt="FAQs" />
        </div>
        </div>
        <div className={styles.right}>
        <div className="bg-black">
  <div key={0} id="yes1" className={styles.Question}>
    <button onClick={() => handleButtonClick(0)} style={{ fontWeight: boldQuestionIndex === 0 ? 'bold' : 'normal' }}>{content[0].title}</button>
  </div>

  <div key={1} id="yes2" className={styles.Question}>
    <button onClick={() => handleButtonClick(1)} style={{ fontWeight: boldQuestionIndex === 1 ? 'bold' : 'normal' }}>{content[1].title}</button>
  </div>

  <div key={2} id="yes3" className={styles.Question}>
    <button onClick={() => handleButtonClick(2)} style={{ fontWeight: boldQuestionIndex === 2 ? 'bold' : 'normal' }}>{content[2].title}</button>
  </div>

  <div key={3} id="yes4" className={styles.Question}>
    <button onClick={() => handleButtonClick(3)} style={{ fontWeight: boldQuestionIndex === 3 ? 'bold' : 'normal' }}>{content[3].title}</button>
  </div>

  <div key={4} id="yes5" className={styles.Question}>
    <button onClick={() => handleButtonClick(4)} style={{ fontWeight: boldQuestionIndex === 4 ? 'bold' : 'normal' }}>{content[4].title}</button>
  </div>

  <div key={5} id="yes6" className={styles.Question}>
    <button onClick={() => handleButtonClick(5)} style={{ fontWeight: boldQuestionIndex === 5 ? 'bold' : 'normal' }}>{content[5].title}</button>
  </div>
</div>
</div>
        
      </div>
      <div className="h-screen w-screen text-9xl bg-slate-500 grid text-center justify-center"><h1>Next Page</h1></div>
    </div>
  );
};

export default StickyScroll2;
