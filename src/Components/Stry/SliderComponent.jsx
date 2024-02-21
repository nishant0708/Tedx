import React, { useLayoutEffect } from 'react'
import "./SliderComponent.css"
import { useEffect,useState,useRef } from 'react'
import samp_image from "../Assests/Images/ZakirKhan_3x1_WhatsOn.jpg-transformed.webp"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import linkedin from "../Assests/Images/linkedin.png";
import instagram from "../Assests/Images/instagram (2).png";
import badal from "../Assests/Images/Group 29.png"

const SliderComponent = () => {
  const progressBarRef = useRef(null);
  const [showTitle, setShowTitle] = useState(false);
  const sliderRef = useRef(null);




  

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);


    const oSliderImgs = document.querySelectorAll(".o-slider__img");
    const sliderDescs = document.querySelectorAll(".slider__desc");
    const speakerNames = document.querySelectorAll(".speaker-name");
    const oSliderItems = document.querySelectorAll(".o-slider__item");
    // const trigger2 = ScrollTrigger.create({
    //   trigger: document.querySelector('.o-slider__title'),
    //   start: "top top",
    //   end: "+=900%",
    //   pin: true,
    //   pinSpacing: false,
    //   markers: true
    // });


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

 




    // DOM vars
    const slider = document.getElementById('slider');
    const title = document.getElementById('title');
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
              // Scroll direction
              sliderStyles.setProperty('--scroll-y', proxy.velocity > 0 ? 1 : -1);
              
              // Scroll velocity
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







/** 
** Round number with n decimals
*/
 const  speakerData2024 = [
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

const speakerData2023 = [
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
    name: 'Dr. Ragini',
    surname: 'Makkhar',
    designation: "Member of UNESCO & Winner of India’s Got Talent Season 5",
    description: "Dr. Ragini Makkhar, the winner of India's Got Talent Season 5 inspired the audience with her talk on ''Evolve with Dance,'' showcasing the transformative power of dance in personal growth and self-expression.",
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



const SpeakerComponent = ({ name, surname, description, designation,image, instagramLink, linkedinLink }) => {
  // Refs for elements to animate
  const imgRef = useRef(null);
  const descRef = useRef(null);
  const nameRef = useRef(null);
  const desgRef = useRef(null);

  const [animationInitialized, setAnimationInitialized] = useState(false);

  useEffect(() => {
    if (!animationInitialized) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(imgRef.current, {
         yPercent: -100,
        duration: 1,
        scrollTrigger: {
          trigger: imgRef.current.closest('.o-slider__item'),
          scrub: 1,
          start: 'top 70',
          end: 'top 90%',
        },
      });

      gsap.to(descRef.current, {
        xPercent: 130,
        duration: 1,
        scrollTrigger: {
          trigger: descRef.current.closest('.o-slider__item'),
          scrub: 1,
          start: 'top 70',
          end: 'top 90%',
          
        },
      });

      gsap.to(nameRef.current, {
        xPercent: -190,
        duration: 1,
        scrollTrigger: {
          trigger: nameRef.current.closest('.o-slider__item'),
          scrub: 1,
          start: 'top 70',
          end: 'top 90%',
        },
      });
      gsap.to(desgRef.current, {
        xPercent: 135,
        duration: 1,
        scrollTrigger: {
          trigger: nameRef.current.closest('.o-slider__item'),
          scrub: 1,
          start: 'top 70',
          end: 'top 90%',
         
        },
      });

      // Set animationInitialized to true after initial animation setup
      setAnimationInitialized(true);
    }
  }, [animationInitialized]);
  const speakerNameClass = getSpeakerNameClass(name);


  return (
    <li className={`o-slider__item ${speakerNameClass}`}>
      <img className="o-slider__img" src={image} alt="" ref={imgRef} />
      <p className='slider__desc' ref={descRef}>{description}</p>
    <p className='speaker_desg' ref={desgRef}>{designation}</p>
      <p className={`speaker-name  `}ref={nameRef}>{name}<br /> <span className='sir'>{surname} </span> <br />
                <span className='log'>
                <a href={linkedinLink}><img style={{ width: "35px" }} src={instagram} alt="" /></a>&nbsp;
                <a href={instagramLink}><img style={{ width: "35px" }} src={linkedin} alt="" /></a></span>
              </p>
          
       
      
    </li>
  );}

const SpeakerList = ({ selectedYear }) => {
  let speakers;

  if (selectedYear === '2023') {
    speakers = speakerData2023;
  } else if (selectedYear === '2024') {
    speakers = speakerData2024;
  }

  console.log("Selected Year inside SpeakerList:", selectedYear);

  return (
    <ul className="o-slider__list">
      {speakers.map((speaker, index) => (
        <SpeakerComponent key={index} {...speaker} />
      ))}
    </ul>
  );
};

const [selectedYear, setSelectedYear] = useState('2023');

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  console.log("Selected Year:", selectedYear);


  return (
  
 
        <div id="slider" className="o-slider" ref={sliderRef}>
        <div className='badal1'><img src={badal} className='.badal'/></div>
            <h1 className="o-slider__title" style={{ position: showTitle ? 'fixed' : 'block' ,transition: 'opacity 0.5s ease' }} >
                <span id="title" >Speakers   </span>
          
                 
                  
            </h1>
            <select  className='year-drop'   onChange={handleChange}>
                <option className="option" value="2024" >2024</option>
        <option value="2023" selected>2023</option>
       
      </select>   
            
            
            
      <SpeakerList selectedYear={selectedYear} />
      <div className="progress-bar" /*style={{ display: showTitle ? 'block' : 'none' }}*/>
        <div ref={progressBarRef} className="progress"></div>
      </div>
    
    </div>
    
       
  )
}

export  default SliderComponent ;
const getSpeakerNameClass = (name) => {
  switch (name) {
    case 'Aryan':
      return 'Aryan-style';
    case 'Akshay':
      return 'akshay-style';

      case 'Abhijit':
        return 'Abhijit-style';
        case 'Dr. Vineet':
          return 'vineet-style';
    case "Ella D'":
      return 'ella-style';
      case 'Dr. Ragini':
        return 'Ragini-style';
    default:
      return '';
  }
};