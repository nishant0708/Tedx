import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Buy from './Buy'; // Import the Buy component
// Import other necessary dependencies

// Import other necessary stylesheets

const Layout = ({ children }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to set up global ScrollTrigger
    const setupGlobalScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: self => {
          const buyButtons = document.querySelectorAll('.buy');
          const clamp = gsap.utils.clamp(-1, 1);
          let velocity;
          let scrollPerc = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;

          buyButtons.forEach((buyButton) => {
            let proxy = {
              velocity: 0
            };
            const trigger = ScrollTrigger.create({
              trigger: buyButton,
              start: "top bottom",
              onUpdate: () => {
                velocity = clamp(self.getVelocity() / -300);
                if (Math.abs(velocity) > Math.abs(proxy.velocity)) {
                  proxy.velocity = velocity;
                  gsap.to(proxy, {
                    velocity: 0,
                    snap: {
                      velocity: .001
                    },
                    duration: .4,
                    ease: 'power3',
                    overwrite: true,
                    onUpdate: () => {
                      // Animate buy button
                      gsap.set(buyButton, {
                        skewX: `${proxy.velocity * 5}deg`, // Apply the same skewX effect
                      });
                    }
                  });
                }
              }
            });
          });
        }
      });
    };

    // Call the function to set up global ScrollTrigger
    setupGlobalScrollTrigger();

    // Clear ScrollTrigger on unmount
    return () => {
      triggerRef.current = null;
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <div className='layout' ref={triggerRef}>
      <Buy /> {/* Integrate the Buy component */}
      {children}
    </div>
  );
};

export default Layout;
