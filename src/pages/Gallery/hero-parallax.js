"use client";
import React from "react";
import logo from '../../Images/logo-black 1.png';
import topRight from '../../Images/reel2.jpg';
import HeroParallax2 from "./hero-parallax-mobile";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Breakpoint, BreakpointProvider } from "react-socks";




export const HeroParallax = ({ products }) => {
  
  const images = [
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
    topRight,
  ];

  const firstRow = products.slice(0,5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
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
    useTransform(scrollYProgress, [0, 0.2], [0.9, 1]),
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
  return (
    
    
      <BreakpointProvider>
      
      <Breakpoint large up>
      <div
      ref={ref}
      className="h-[450vh] max-[600px]:py-0 pt-40 overflow-vi bg-black  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="absolute -z-[100000] rotate-180 w-14 -top-[70vh] right-0 "> <img src={topRight}></img></div>
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
        <motion.div className="flex flex-row-reverse mt-60 space-x-reverse space-x-20 mb-20">
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
      </motion.div></div></Breakpoint>
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
       <h1 className="text-8xl h-72 right-10 top-40 absolute p-0 font-extralight font-[Poppins] dark:text-white">....HighLights</h1>
       
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
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover rounded-3xl  object-left-top absolute h-full w-full opacity-100 inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-20 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
