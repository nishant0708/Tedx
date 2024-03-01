"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export const HeroParallax2 = ({ products }) => {
  const firstRow = products.slice(0,5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const fourthRow = products.slice(15,20);
  const fifthRow = products.slice(20,25);
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 150, bounce: 1 };

  

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 1200]),
    springConfig
  );

  

  const translateXThird = useSpring(
    useTransform(scrollYProgress, [0, 1], [-530, 250]),
    springConfig
  );
  const translateXFIFTH = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1230, 250]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, -1800]),
    springConfig
  );
  const translateXReverseFourth = useSpring(
    useTransform(scrollYProgress, [0, 1], [700, -1300]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [35, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0], [0.1, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-800, -200]),
    springConfig
  );
  


  return (
    <div
      ref={ref}
      className="h-[280vh] py-40 overflow-hidden bg-black  antialiased relative  flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <div className="absolute z-10"><motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="FIRST flex flex-row-reverse mt-[95vh] w-screen space-x-reverse space-x-5">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="SECOND flex flex-row space-x-5">
          {secondRow.map((product) => (
            <ProductCardLandscape
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="THIRD flex -translate-x-80 flex-row-reverse space-x-reverse space-x-5">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXThird}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="FOURTH flex flex-row space-x-5">
          {fourthRow.map((product) => (
            <ProductCardLandscape
              product={product}
              translate={translateXReverseFourth}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="FIFTH flex -translate-x-80 flex-row-reverse space-x-reverse space-x-5">
          {fifthRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXFIFTH}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
      
      </div>
    </div>
  );
};

export default HeroParallax2;

export const Header = () => {
    const ref = React.useRef(null);
    const springConfig = { stiffness: 200, damping: 150 };
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
      });
    
    const rotateX = useSpring(
      useTransform(scrollYProgress, [0, 0.1], [35, 0]),
      springConfig,
    );
    const rotateZ = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [20, 0]),
      springConfig,
    );
    
     
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.3], [50, 800]),
        springConfig,
  );

  return (
    <div
    
        className="absolute z-[100000] h-28 translate-y-32 mx-auto  bg-transparent px-4  translate-x-10 -translate-y-10">
       <motion.div
        style={{
          rotateX,
          rotateZ,
        }}
        className=""
      ><h1 className=" text-6xl h-28 text-right font-Poppins text-white"><span className="text-[#eb0028] poppins-bold">HIGH</span>LIGHTS</h1></motion.div>
       
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
        className="group/product opacity-100 mt-20 h-60 w-40 relative flex-shrink-0"
      >
        <a
          href='javascript:void(0)'
          className="block opacity-100 group-hover/product:shadow-2xl"
        >
          <img
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover  opacity-100 rounded-xl absolute h-full w-full  inset-0" // Change opacity here
            alt={product.title}
          />
        </a>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-50 bg-black pointer-events-none"></div> // Change opacity here
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    );
  };
  

  export const ProductCardLandscape = ({ product, translate }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className="group/product opacity-100 mt-20 h-40 w-60 relative flex-shrink-0"
      >
        <a
          href='javascript:void(0)'
          className="block opacity-100 group-hover/product:shadow-2xl"
        >
          <img
            src={product.thumbnail}
            height="400"
            width="700"
            className="object-cover object-left-top opacity-100 rounded-xl absolute h-full w-full  inset-0" // Change opacity here
            alt={product.title}
          />
        </a>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-50 bg-black pointer-events-none"></div> // Change opacity here
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    );
  };
  