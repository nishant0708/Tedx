import React, { useEffect,useRef,useState } from 'react'
import "./Speakersm.css"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import mlinkedin from "../Assests/Images/linkedin (1).png";
import instagram from "../Assests/Images/instagram (1).png";
import samp_image from "../Assests/Images/ZakirKhan_3x1_WhatsOn.jpg-transformed.webp"

import badal from "../Assests/Images/Group 29.png"


const speakers2024 = [
    {
        name: 'Zakhir',
        surname: 'Khan',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident fuga quaerat, laborum eos distinctio quibusdam amet, velit impedit eligendi ut sint laboriosam dicta, tenetur incidunt et assumenda facere? Dolores.',
        image: samp_image,
        instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
        linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
      },
      {
        name: 'Mithila',
        surname: 'Palker',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident fuga quaerat, laborum eos distinctio quibusdam amet, velit impedit eligendi ut sint laboriosam dicta, tenetur incidunt et assumenda facere? Dolores.',
        image: samp_image,
        instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
        linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
      },
      {
        name: 'Mithila',
        surname: 'Palker',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident fuga quaerat, laborum eos distinctio quibusdam amet, velit impedit eligendi ut sint laboriosam dicta, tenetur incidunt et assumenda facere? Dolores.',
        image: samp_image,
        instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
        linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
      },
    
      {
        name: 'Mithila',
        surname: 'Palker',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident fuga quaerat, laborum eos distinctio quibusdam amet, velit impedit eligendi ut sint laboriosam dicta, tenetur incidunt et assumenda facere? Dolores.',
        image: samp_image,
        instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
        linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
      },
    
      {
        name: 'Mithila',
        surname: 'Palker',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident fuga quaerat, laborum eos distinctio quibusdam amet, velit impedit eligendi ut sint laboriosam dicta, tenetur incidunt et assumenda facere? Dolores.',
        image: samp_image,
        instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
        linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
      },
    
      {
        name: 'Mithila',
        surname: 'Palker',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident fuga quaerat, laborum eos distinctio quibusdam amet, velit impedit eligendi ut sint laboriosam dicta, tenetur incidunt et assumenda facere? Dolores.',
        image: samp_image,
        instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
        linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
      },
    
  ];
  const speakers2023 = [
    {
      name: "Ella D'",
      surname: "Verma",
      description: "Ella D'Verma, delivered a powerful speech on ''Acceptance'', highlighting the significance of embracing diversity and  fostering an inclusive society.",
      image:"https://imgur.com/bXsedhy.png",
      designation: "Miss International Trans Queen",
      instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
      linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
    },
    
    {
      name: 'Abhishek',
      surname: 'Mishra',
      designation: "CTO and Co-founder at Pisarv Technology",
      description: 'Abhishek Mishra captivated the audience with his talk on "Transhumanism" and how technology is reshaping the evolutionary path of humanity',
      image: "https://imgur.com/CAGdBjm.png",
      instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
      linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
    },
  
    {
      name: 'Dr. Ragini ',
      surname: 'Makkhar',
      designation: "Member of UNESCO & Winner of India’s Got Talent Season 5",
      description: "Dr. Ragini Makkhar, India's Got Talent Season 5 winner, captivated the audience with her talk on ''Evolve with Dance,'' highlighting dance's transformative impact on personal growth and self-expression.",
      image:"https://imgur.com/EEVejQt.png",
      instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
      linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
    },
  
    {
      name: 'Bhaskar',
      surname: 'Indrakanti',
      description: 'Bhaskar Indrakanti delivered a thought-provoking talk on "Mental Awareness," raising awareness about mental health and emphasising the importance of de-stigmatization.',
      image:"https://imgur.com/661JHpW.png",
      designation: "Entrepreneur & Social Engineer",
      instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
      linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
    },
    {
      name: 'Akshay',
      surname: 'Singh',
      designation: "The youngest deputy collector of the MP government.",
      description: 'Akshay Singh, shared his insights on "Social Rights," advocating for equal opportunities and social justice',
      image: "https://imgur.com/tKpCx8R.png",
      instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
      linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
    },
    {
      name: 'Abhijit',
      surname: 'Chavda',
      designation: "Geopolitics, History & Science Expert., Youtuber",
      description: 'Abhijit Chavda delivered a compelling talk on "Geo Politics," shedding light on the dynamic interplay of politics and geography in shaping the global landscape',
      image: "https://imgur.com/8E3IZ7u.png",
      instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
      linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
    },
    {
      name: 'Dr. Vineet',
      surname: 'Agrawal',
      designation: "Author, History and Mythology Expert",
      description: 'Dr. Vineet Agrawal engaged the audience with his enlightening presentation on "Science and Scriptures," exploring the intersections between scientific advancements and ancient wisdom.',
      image: "https://imgur.com/BoHZel8.png",
      instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
      linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
    },
    {
      name: 'Aryan',
      surname: 'Vijayvergiya',
      designation: "Student at IIPS Founder at Mission Vasundhara & Satat Productions",
      description: 'In his talk, Aryan discussed the power of positive thinking and its potential to drive the evolution of humanity as a whole.',
      image: "https://imgur.com/jzcJX9H.png",
      instagramLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ',
      linkedinLink: 'https://www.youtube.com/watch?v=J5twQLXJ-vQ'
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
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        const speakerNames = document.querySelectorAll(".mSpeaker-name");
        const oSliderImgs = document.querySelectorAll(".o-mslider__img");
        const speakerDescs = document.querySelectorAll(".mspeaker-desc");
        const speakerDesg = document.querySelectorAll(".mspeaker-desg");
        speakerNames.forEach(name => {
          gsap.to(name, {
            xPercent: -140,
            duration: 1,
            scrollTrigger: {
              trigger: name.closest(".o-mslider__item"),
              scrub: 1,
              start: "top 20%",
              end: "top 100%",
             
            },
            ease: "power3"
          });
        });
        oSliderImgs.forEach(img => {
        gsap.to(img, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: img.closest(".o-mslider__item"),
              scrub: 1,
              start: "top 30%",
              end: "top 100%",
             
            },
            easeIn: true
          });
        });

        speakerDescs.forEach(desc => {
            gsap.to(desc, {
              xPercent:162,
              duration: 1,
              scrollTrigger: {
                trigger: desc.closest(".o-mslider__item"),
                scrub: 1,
                start: "top 80",
                end: "top 100%",
               
              },
              ease: "power3"
            });
          });

          speakerDesg.forEach(designation => {
            gsap.to(designation, {
              opacity:1,
              duration: 1,
              scrollTrigger: {
                trigger: designation.closest(".o-mslider__item"),
                scrub: 1,
                start: "top 80",
                end: "top 100%",
               
              },
              easeIn: true
            });
          });



      }, []);
    
       
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
 


    const [selectedYear, setSelectedYear] = useState('2023');
    const selectedSpeakers = selectedYear === '2024' ? speakers2024 : speakers2023;
    const handleChange = (event) => {
        setSelectedYear(event.target.value);
      };
    

  return (
    <div id="mslider" class="o-mslider">
  
  <h1 class="o-mslider__title">
    <span id="mtitle">Speakers</span>
  </h1>
  <img  classname="mbadal" style={{position:'fixed' ,width:"60%", bottom:"0%" , right:"0%"}} src={badal} alt=""/>
  <img  classname="mbadal" style={{position:'fixed' ,width:"60%", top:"40%" , left:"-15%"}} src={badal} alt=""/>
  <div className="mprogress-bar" /*style={{ display: showTitle ? 'block' : 'none' }}*/>
        <div ref={progressBarRef} className="mprogress"></div>
      </div>
  <ul class="o-mslider__list">

  <select className='myear-drop' onChange={handleChange} value={selectedYear}>
          <option className="option" value="2024">2024</option>
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
                case 'Aryan':
                  speakerClass = 'maryan-style';
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
                <p className={`mSpeaker-name `}>{speaker.name}<br /> {speaker.surname} <br />
                  <a href={speaker.linkedinLink}><img style={{ width: "25px" }} src={instagram} alt="" /></a>&nbsp;
                  <a href={speaker.instagramLink}><img style={{ width: "25px" }} src={mlinkedin} alt="" /></a>
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
