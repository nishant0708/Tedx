import React, { useRef, useEffect, useState } from 'react';
import './Speaker.css';
import sampleimg from '../Assests/Images/VikasKhanna_2017I-stageshot.jpg';
import linkedin_logo from "../Assests/Images/linkedin.png";
import instagram_logo from "../Assests/Images/instagram (1).png";

const Speaker = () => {
  const [speakersLeft, setSpeakersLeft] = useState(5); // Assuming 5 speakers initially
  const totalSpeakers = 5; // Total number of speakers
  const [isProgressBarVisible, setIsProgressBarVisible] = useState(true); // State to manage the visibility of progress bar
  const [isHeadingVisible, setIsHeadingVisible] = useState(true); // State to manage the visibility of speaker heading

  useEffect(() => {
    const handleScroll = () => {
      const speakerElements = document.querySelectorAll('.speaker-component');

      if (speakerElements.length > 0) {
        let speakersInView = 0;
        const windowHeight = window.innerHeight;

        speakerElements.forEach(element => {
          const topPosition = element.getBoundingClientRect().top;
          if (topPosition < windowHeight * 0.2) { // Change this threshold to 75%
            speakersInView++;
          }
        });

        setSpeakersLeft(totalSpeakers - speakersInView);

        const footer = document.querySelector('.footer');
        const footerTopPosition = footer.getBoundingClientRect().top;
        if (footerTopPosition < windowHeight * 0.8) {
          setIsProgressBarVisible(false);
        } else {
          setIsProgressBarVisible(true);
        }

        const slide = document.querySelector('.footer');
        const slideTopPosition = slide.getBoundingClientRect().top;
        if (slideTopPosition <= windowHeight * 0.95) {
          setIsHeadingVisible(false);
        } else {
          setIsHeadingVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSpeakers]);

  return (
    <div className="containerofspeaker">
      <div className='progress-bar' style={{ display: isProgressBarVisible ? 'block' : 'none' }}>
        <hr className='progress' style={{ width: `${(((totalSpeakers-speakersLeft) / totalSpeakers) * 100)}%` }} />
      </div>
      <div className='speakers-container'>
        <div className='speaker'>
          <SpeakerComponent />
        </div>
        <div className='speaker'>
          <SpeakerComponent />
        </div>
        <div className='speaker'>
          <SpeakerComponent />
        </div>
        <div className='speaker'>
          <SpeakerComponent />
        </div>
        <div className='speaker'>
          <SpeakerComponent />
        </div>
      </div>
      <p className='speaker-heading' style={{ display: (isHeadingVisible && (totalSpeakers - speakersLeft) > 0) ? 'block' : 'none' }}>Speakers</p>
    </div>
  );
};

const SpeakerComponent = () => {
  const speakerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (speakerRef.current) {
        const topPosition = speakerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (topPosition < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`speaker-component ${isVisible ? 'visible' : ''}`} ref={speakerRef}>
      <img className='speaker-image' src={sampleimg} alt='speaker Image' />
      {/* <div className='speaker-details'>
        <div className={`speaker-name ${isVisible ? 'slide-in-right' : ''}`}>Speaker <br/> &nbsp; &nbsp;Name <br/>
          <div className='logos'> 
            <img style={{width:"25px"}} src={linkedin_logo} alt=''/>
            <img style={{width:"25px"}} src={instagram_logo} alt=''/>
          </div>
        </div>
        <div className={`speaker-desc ${isVisible ? 'slide-in-left' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas rem excepturi, ut asperiores at nemo cupiditate quia architecto neque distinctio voluptatibus aspernatur sequi quisquam commodi in, reiciendis tenetur modi. Harum consectetur consequuntur itaque magni, reiciendis assumenda dolor dolores nemo recusandae deserunt. Vel debitis obcaecati eveniet asperiores nemo, delectus velit suscipit, nisi illo exercitationem rerum deleniti ducimus consectetur reprehenderit deserunt.</div>
      </div> */}
    </div>
  );
};

export default Speaker;
