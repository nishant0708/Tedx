"use client";
import React, { useEffect, useRef } from "react";
import HeroParallax2 from "./hero-parallax-mobile";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Breakpoint, BreakpointProvider } from "react-socks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";




export const HeroParallax = ({ products }) => {
  
  const firstRow = products.slice(0,5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const fourthRow = products.slice(10, 20);
  const sponsorContainerRef = useRef(null);
  const sponsorTriggerRef = useRef(null);
 
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const scrollChange = useSpring(
    useTransform(scrollYProgress, [500,1000], [0, 500]),
    springConfig,
  );

  console.log(scrollChange);
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXF = useSpring(
    useTransform(scrollChange, [0, 1], [0, -100]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.5, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig
  );

  const sponsorContainerRef2 = useRef(null);
  const sponsorTriggerRef2 = useRef(null);
  useEffect(() => {
    const pin = gsap.fromTo(sponsorContainerRef2.current,{
      translateX:'-150vw',
  },{
      translateX: '+0vw',
      ease:'none',
      duration:4,
      scrollTrigger:{
          trigger: sponsorTriggerRef2.current,
          start:'top 60%',
          end:'${sponsorLen*370} top',
  
      }
  })
  
  }, []);


  useEffect(() => {
  const pin = gsap.fromTo(sponsorContainerRef.current,{
    translateX:'+0vw',
},{
    translateX: '-90vw',
    duration:4,
    scrollTrigger:{
        trigger: sponsorTriggerRef.current,
        start:'top 50%',
        end:'${sponsorLen*370} top',

    }
})

}, []);




  return (
    
    
      <BreakpointProvider>
      
      <Breakpoint medium up>
      <div
      ref={ref}
      className="h-[500vh] py-40 overflow-hidden bg-black pt-96  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
      <div className='sponsor-wrapper'
             ref={sponsorTriggerRef}>
            
            <div className='sponsors-container'
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "4vw",
              duration: 8,
              paddingTop: "35vh",
              overflowX: "visible",
          
          }}
            ref={sponsorContainerRef}>
        
                 {fourthRow.map((product) => (
                  <ProductCard
                    product={product}
                    translate={translateXF}
                    key={product.title}
                  />
                  ))}   
            </div>
        </div>
        
        <div className='sponsor-wrapper'
             ref={sponsorTriggerRef2}>
            
            <div className='sponsors-container'
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "4vw",
              duration: 8,
              paddingTop: "15vh",
              overflowX: "visible",
          
          }}
            ref={sponsorContainerRef2}>
        
                 {fourthRow.map((product) => (
                  <ProductCard
                    product={product}
                    translate={translateXF}
                    key={product.title}
                  />
                  ))}   
            </div>
        </div>
    </div>
  </Breakpoint>
      <Breakpoint small down>
        <HeroParallax2 products={products}/>
      </Breakpoint>
    </BreakpointProvider>
    
  );
};

export default HeroParallax;

export const Header = () => {
  return (
    <div className="max-w-7xl z-50 py-60 mx-auto px-4 w-full  left-0 top-0">
       <h1 className="text-8xl h-72 right-10 top-40 absolute p-0 font-[Poppins] dark:text-white">HIGHLIGHTS</h1>
       
      </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product rounded-xl  h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block rounded-xl group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover rounded-3xl  object-left-top absolute h-full w-full opacity-100 inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 rounded-xl h-full w-full opacity-0 group-hover/product:opacity-20 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 rounded-xl left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
