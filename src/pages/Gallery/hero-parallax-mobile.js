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
  const fourthRow = products.slice(16,20);
  
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
      className="h-[350vh] py-40 overflow-hidden bg-black  antialiased relative  flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row-reverse mt-[95vh] w-screen space-x-reverse space-x-5">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-5">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex -translate-x-80 flex-row-reverse space-x-reverse space-x-5">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
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
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
      });
    
      const springConfig = { stiffness: 500, damping: 300, bounce: 1 };
    
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0, 400]),
    
  );

  return (
    <div
    
        className="absolute z-[100000] h-28  mx-auto  bg-transparent px-4  right-0 top-[5vh]">
       <h1 className=" text-6xl h-28 text-right font-bold text-white">HighLights</h1>
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
          href={product.link}
          className="block opacity-100 group-hover/product:shadow-2xl"
        >
          <img
            src={product.thumbnail}
            height="600"
            width="600"
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
  