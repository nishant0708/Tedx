import React, { useEffect,useRef,useState } from 'react'
import "./Speakersm.css"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import mlinkedin from "../Assests/Images/linkedin (1).png";
import instagram from "../Assests/Images/instagram (1).png";
import samp_image from "../Assests/Images/rev.png"

import badal from "../Assests/Images/Group 29.png"


const speakers2024 = [
    {
        name: 'STAY',
        surname: 'TUNED..',
        designation: "Meet the Trailblazers: TEDx Speaker Reveal",
        description: 'Join us on February 27th as we unveil a lineup of TEDx speakers who will ignite inspiration and challenge perspectives with their innovative ideas and stories.',
        image: samp_image,
        instagramLink: '',
        linkedinLink: ''
      },
      {
        name: 'REVEALING',
        surname: 'SOON..',
        designation: "Meet the Trailblazers: TEDx Speaker Reveal",
        description: 'Join us on February 27th as we unveil a lineup of TEDx speakers who will ignite inspiration and challenge perspectives with their innovative ideas and stories.',
        image: samp_image,
        instagramLink: '',
        linkedinLink: ''
      },
      
    
  ];
  const speakers2023 = [
    {
      name: "Ella D'",
      surname: "Verma",
      description: "Ella D'Verma, delivered a powerful speech on ''Acceptance'', highlighting the significance of embracing diversity and  fostering an inclusive society.",
      image:"https://imgur.com/0CzNwIT.png",
      designation: "Miss International Trans Queen",
      instagramLink: 'https://www.instagram.com/elladverma?igsh=MXQ0eHNicGF2b2FsaA',
    linkedinLink: 'https://www.linkedin.com/in/ella-verma-ab6889236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    
    {
      name: 'Abhishek',
      surname: 'Mishra',
      designation: "CTO and Co-founder at Pisarv Technology",
      description: 'Abhishek Mishra captivated the audience with his talk on "Transhumanism" and how technology is reshaping the evolutionary path of humanity',
      image: "https://imgur.com/wY7gfX2.png",
      instagramLink: 'https://www.instagram.com/abhisek.mnit?igsh=MTM2MGg2Y3VweGJveQ',
      linkedinLink: ''
    },
  
    {
      name: 'Dr. Ragini',
      surname: 'Makkhar',
      designation: "Member of UNESCO & Winner of India’s Got Talent Season 5",
      description: "Dr. Ragini Makkhar, India's Got Talent Season 5 winner, captivated the audience with her talk on ''Evolve with Dance,'' highlighting dance's transformative impact on personal growth and self-expression.",
      image:"https://imgur.com/d7hhaL2.png",
      instagramLink: 'https://www.instagram.com/dr.raginimakkad?igsh=MXJlN245ZWh3N2phZw==',
      linkedinLink: ''
    },
  
    {
      name: 'Bhaskar',
      surname: 'Indrakanti',
      description: 'Bhaskar Indrakanti delivered a thought-provoking talk on "Mental Awareness," raising awareness about mental health and emphasising the importance of de-stigmatization.',
      image:"https://imgur.com/SatTy2f.png",
      designation: "Entrepreneur & Social Engineer",
      instagramLink: 'https://www.instagram.com/bhaskar_indrakanti?igsh=MWZjOG1iMzh0bDAzYw==',
    linkedinLink: 'https://www.linkedin.com/in/bh%C4%81skar-indrakanti-424b6051?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Akshay',
      surname: 'Singh',
      designation: "The youngest deputy collector of the MP government.",
      description: 'Akshay Singh, shared his insights on "Social Rights," advocating for equal opportunities and social justice',
      image: "https://imgur.com/dLQqQ8B.png",
      instagramLink: 'https://www.instagram.com/theakshay_jointcollector?igsh=MTF6NjZldWNqbWVqOQ==',
    linkedinLink: 'https://www.linkedin.com/in/akshay-singh-markam-a70178204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Abhijit',
      surname: 'Chavda',
      designation: "Geopolitics, History & Science Expert., Youtuber",
      description: 'Abhijit Chavda delivered a compelling talk on "Geo Politics," shedding light on the dynamic interplay of politics and geography in shaping the global landscape',
      image: "https://imgur.com/qoZ3Os1.png",
      instagramLink: 'https://www.instagram.com/theabhijitchavda?igsh=aXRqMTV2cGljb3pi',
    linkedinLink: 'https://www.linkedin.com/in/abhijitchavda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Dr. Vineet',
      surname: 'Agrawal',
      designation: "Author, History and Mythology Expert",
      description: 'Dr. Vineet Agrawal engaged the audience with his enlightening presentation on "Science and Scriptures," exploring the intersections between scientific advancements and ancient wisdom.',
      image: "https://imgur.com/0H4cr82.png",
      instagramLink: 'https://www.instagram.com/drvineetaggarwal?igsh=MWV5bmxlejN4eXdjcA==',
    linkedinLink: 'https://www.linkedin.com/in/drvineetaggarwal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Aryan',
      surname: 'Vijayvergiya',
      designation: "Student at IIPS Founder at Mission Vasundhara & Satat Productions",
      description: 'In his talk, Aryan discussed the power of positive thinking and its potential to drive the evolution of humanity as a whole.',
      image: "https://imgur.com/jzcJX9H.png",
      instagramLink: 'https://www.instagram.com/aryanvijayvergiya?igsh=MWJib2RhcG44dWhwcg==',
      linkedinLink: 'https://www.linkedin.com/in/aryan-vijayvergiya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
  
  ];
  


const Speakersm = () => {


  
    useEffect(()=>{

        gsap.registerPlugin(ScrollTrigger);
    
    
        // DOM vars
        const slider = document.getElementById('mslider');
        const title = document.getElementById('mtitle');
        const toggle = document.getElementById('toggle');
        const sliderStyles = slider.style;
    
        // Scroll trigger
        let scrollPerc = 0;
        let scrollVel = 0;
        let velocity;
        let proxy = {
          velocity: 0
        };
        
        let titleSetter = gsap.quickSetter(title, 'y', 'px');
        let clamp = gsap.utils.clamp(-1, 1);
        //ScrollTrigger
    
        const trigger = ScrollTrigger.create({
          trigger:slider,
          start:"Top 80%",
          
          
          onUpdate: self => {
            // Scroll percentage
            scrollPerc = round(window.scrollY / (slider.offsetHeight - window.innerHeight) * 100, 2);
            sliderStyles.setProperty('--scroll-perc', scrollPerc);
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
                //   Scroll direction
                  sliderStyles.setProperty('--scroll-y', proxy.velocity > 0 ? 1 : -1);
                  
                //   Scroll velocity
                  scrollVel = Math.abs(proxy.velocity);
                  sliderStyles.setProperty('--scroll-vel', scrollVel);
        
                  // Animate title
                  gsap.set(title, {
                    skewX: `${proxy.velocity * 5}deg`,
                    x: -scrollPerc / 100 * (title.offsetWidth - window.innerWidth)
                  });
                }
              });
            }
          }
        });
    
        const round = (x, n = 2) => {
          const decimals = 10 ** n;
          return Math.round(x * decimals) / decimals;
        };
       
       
    } , []);
    const [selectedYear, setSelectedYear] = useState('2024');

    const initializeAnimations = () => {
        gsap.registerPlugin(ScrollTrigger);

        const speakerNames = document.querySelectorAll(".mSpeaker-name");
        const oSliderImgs = document.querySelectorAll(".o-mslider__img");
        const speakerDescs = document.querySelectorAll(".mspeaker-desc");
        const speakerDesg = document.querySelectorAll(".mspeaker-desg");

        const animations = [];

        speakerNames.forEach(name => {
            animations.push(gsap.to(name, {
                xPercent: -140,
                duration: 1,
                scrollTrigger: {
                    trigger: name.closest(".o-mslider__item"),
                    scrub: 1,
                    start: "top 50%",
                    end: "top 100%",
                },
                ease: "power3"
            }));
        });

        oSliderImgs.forEach(img => {
            animations.push(gsap.to(img, {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: img.closest(".o-mslider__item"),
                    scrub: 1,
                    start: "top 50%",
                    end: "top 100%",
                },
            }));
        });

        speakerDescs.forEach(desc => {
            animations.push(gsap.to(desc, {
                xPercent: 152,
                duration: 1,
                scrollTrigger: {
                    trigger: desc.closest(".o-mslider__item"),
                    scrub: 1,
                    start: "top 30%",
                    end: "top 100%",
                },
                ease: "power3"
            }));
        });

        speakerDesg.forEach(designation => {
            animations.push(gsap.to(designation, {
                opacity: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: designation.closest(".o-mslider__item"),
                    scrub: 1,
                    start: "top 30%",
                    end: "top 100%",
                },
                ease:"bounce.in"
            }));
        });

        return animations;
    };

    useEffect(() => {
        // Initialize or reapply animations when selectedYear changes
        const animations = initializeAnimations();

        return () => {
            // Clean up animations when component unmounts or selectedYear changes
            animations.forEach(animation => animation.kill());
        };
    }, [selectedYear]);
       
      const progressBarRef = useRef(null);
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
           
       
        const oSliderItems = document.querySelectorAll(".o-mslider__item");
        oSliderItems.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            onEnter: () => {
              const progress = ((index + 1) / oSliderItems.length) * 100;
              gsap.to(progressBarRef.current, { width: `${progress}%`, duration: 0.5 });
            },
            onEnterBack: () => {
              const progress = (index / oSliderItems.length) * 100;
              gsap.to(progressBarRef.current, { width: `${progress}%`, duration: 0.5 });
            }
          });
        });
    
        gsap.to(progressBarRef.current, { width: `0%`, duration: 0 }); // Reset progress bar width
      }, []);
 


    // const [selectedYear, setSelectedYear] = useState('2023');
    const selectedSpeakers = selectedYear === '2024' ? speakers2024 : speakers2023;
    const handleChange = (event) => {
        setSelectedYear(event.target.value);
      };
    

  return (
    <div id="mslider" class="o-mslider">
  
  <h1 className={`o-mslider__title ${selectedSpeakers.some(speaker => speaker.name === 'r') ? 'custom-title-style' : ''}`}>
    <span id="mtitle">Speakers</span>
  </h1>
  <img  classname="mbadal" style={{position:'fixed' ,width:"60%", bottom:"0%" , right:"0%"}} src={badal} alt=""/>
  <img  classname="mbadal" style={{position:'fixed' ,width:"60%", top:"40%" , left:"-15%"}} src={badal} alt=""/>
  <div className="mprogress-bar" /*style={{ display: showTitle ? 'block' : 'none' }}*/>
        <div ref={progressBarRef} className="mprogress"></div>
      </div>
  <ul class="o-mslider__list">

  <select className='myear' onChange={handleChange} value={selectedYear}>
          <option  value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        {selectedSpeakers.map((speaker, index) => {
          let speakerClass = '';
          switch (selectedYear) {
            case '2023':
              switch (speaker.name) {
                case 'Akshay':
                  speakerClass = 'makshay-style';
                  break;
                case 'Bhaskar':
                  speakerClass = 'mbhaskar-style';
                  break;
                case 'Dr. Vineet':
                  speakerClass = 'mvineet-style';
                  break;
                case 'Abhijit':
                  speakerClass = 'mabhijit-style';
                  break;
                case 'Abhishek':
                  speakerClass = 'mAbhishek-style';
                  break;
                case 'Aryan':
                  speakerClass = 'maryan-style';
                  break;
                case "Ella D'":
                  speakerClass = "Ella";
                  break;
                case "Dr. Ragini":
                  speakerClass = "mragini";
                  break;
                default:
                  speakerClass = '';
              }
              break;
            case '2024':
              // Add switch cases for 2024 here
              switch (speaker.name) {
                
                case 'REVEALING':
                  speakerClass = 'mreveal';
                  break;
                default:
                  speakerClass = '';
              }
              break;
            default:
              speakerClass = '';
          }
          return (
            <li key={index} className={`o-mslider__item ${speakerClass}`}>
              <div className='mspeaker-tile'>
                <img className="o-mslider__img" src={speaker.image} alt="" />
                <p className='mspeaker-desg'>{speaker.designation}</p>
                <p className='mspeaker-desc'>{speaker.description}</p>
                <p className={`mSpeaker-name `}>{speaker.name}<br /> {speaker.surname} 
                <div className='lin'>
                  <a href={speaker.linkedinLink}><img  className='icon' src={instagram} alt="" /></a>&nbsp;
                  <a href={speaker.instagramLink}><img className='icon' src={mlinkedin} alt="" /></a></div>
             
                </p>
                </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Speakersm;
