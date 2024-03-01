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
  const fourthRow = products.slice(15, 20);
  
  const fifthRow = products.slice(20, 25);
 
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 150, bounce: 1 };
  const scrollChange = useSpring(
    useTransform(scrollYProgress, [500,1000], [0, 500]),
    springConfig,
  );

  console.log(scrollChange);
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 3000]),
    springConfig
  );
  
  const translateX3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1000, 2000]),
    springConfig
  );

  const translateX5 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-2000, 1000]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -2500]),
    springConfig
  );
  const translateXReverse4 = useSpring(
    useTransform(scrollYProgress, [0, 1], [1000, -1500]),
    springConfig
  );  

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0.5, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [30, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  


  return (
    
    
      <BreakpointProvider>
      
      <Breakpoint medium up>
      <div
      ref={ref}
      className="h-fit overflow-hidden mb-0 pb-0 bg-black pt-96  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mb-0 z-10"
      >
        <motion.div className="FIRST flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="SECOND flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="THIRD flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX3}
              key={product.title}
            />
          ))}
        </motion.div>
        
      </motion.div>
      <motion.div className="FOURth row flex flex-row  mt-[78vh] space-x-20 ">
          {fourthRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse4}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="FIFTH flex flex-row-reverse mt-20 space-x-reverse space-x-20">
          {fifthRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX5}
              key={product.title}
            />
          ))}
        </motion.div>
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
       <h1 className="text-8xl h-72 right-10 top-40 absolute p-0 font-[Poppins]  dark:text-white"><span className="text-[#eb0028] poppins-bold">HIGH</span>LIGHTS</h1>
       
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
        href='javascript:void(0)'
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
