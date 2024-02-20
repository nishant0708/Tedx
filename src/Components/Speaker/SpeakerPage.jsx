import React, { useState, useEffect, useRef } from 'react';
import './mergedPage.css';
import './SpeakerPage.css';

function SpeakerPage() {
    const [year, setYear] = useState(2024);
    const [hoveredSpeaker, setHoveredSpeaker] = useState(null);
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const activeSpeakerRef = useRef(null);
    const [activeSpeakers, setActiveSpeakers] = useState([]);

    const speakers = {
        2023: ["Levi", "Light", "red", "punk", "naruto"],
        2024: ["Renji", "Sora", "Kaito", "Tsuki", "Mitsui"]
    };
    
    const speakerDescriptions = {
        Levi: "Levi is an experienced software engineer with a passion for front-end development. He enjoys creating user-friendly interfaces and exploring new technologies.",
        Light: "Light is a seasoned data scientist specializing in machine learning and artificial intelligence. He has a knack for solving complex problems and loves sharing his knowledge with others.",
        red: "red is a talented graphic designer known for his creativity and attention to detail. He has worked on numerous projects for both small startups and large corporations.",
        punk: "punk is a passionate musician who enjoys experimenting with different genres and styles. He has released several albums and performs regularly at local venues.",
        naruto: "naruto is a dedicated martial artist with a black belt in karate. He teaches self-defense classes and competes in tournaments across the country.",
        Renji: "Renji is a successful entrepreneur who has founded multiple startups in the tech industry. He is known for his visionary ideas and ability to turn them into reality.",
        Sora: "Sora is a talented photographer with an eye for capturing the beauty of the world around her. Her stunning images have been featured in magazines and exhibitions.",
        Kaito: "Kaito is a passionate chef who specializes in Japanese cuisine. He trained in Tokyo and now runs his own restaurant, where he creates delicious and innovative dishes.",
        Tsuki: "Tsuki is a skilled fashion designer known for her elegant and timeless designs. She draws inspiration from nature and travels the world in search of new ideas.",
        Mitsui: "Mitsui is a renowned author and storyteller who has written several bestselling novels. His captivating tales transport readers to fantastical worlds full of adventure and intrigue."
    };
    
    const youtubeLinks = {
        Levi: "https://www.youtube.com/watch?v=_VIDEO_ID",
        Light: "https://www.youtube.com/watch?v=_VIDEO_ID",
        red: "https://www.youtube.com/watch?v=_VIDEO_ID",
        punk: "https://www.youtube.com/watch?v=_VIDEO_ID",
        naruto: "https://www.youtube.com/watch?v=_VIDEO_ID",
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleHover = (speaker) => {
        setHoveredSpeaker(speaker);
        setDescriptionVisible(true);
    };

    const handleLeave = () => {
        setHoveredSpeaker(null);
        setDescriptionVisible(false);
    };

    const handleYearChange = (newYear) => {
        setYear(newYear);
    };

    const handleSpeakerHover = (speaker) => {
        setHoveredSpeaker(speaker);
        setDescriptionVisible(true);
    };

    const handleSpeakerLeave = () => {
        setHoveredSpeaker(null);
        setDescriptionVisible(false);
    };

    const handleClick = (speaker) => {
        // Reset styles and hide description for the previous active speaker
        if (activeSpeakerRef.current) {
            const previousSpeaker = activeSpeakerRef.current;
            previousSpeaker.classList.remove('active');

            const previousSpeakerName = previousSpeaker.querySelector('.mobile-speaker-name');
            const previousSpeakerDetails = previousSpeaker.querySelector('.mobile-speaker-details');

            if (previousSpeakerName) {
                previousSpeakerName.style.transform = 'translateY(0)';
            }

            if (previousSpeakerDetails) {
                previousSpeakerDetails.style.transform = 'translateY(100%)';
            }
        }

        // Set styles for the clicked speaker
        activeSpeakerRef.current = document.getElementById(`speaker-${speaker}`);
        activeSpeakerRef.current.classList.add('active');

        handleHover(speaker);
        handleLeave();
    };

    const isActiveSpeaker = (speaker) => {
        return activeSpeakers.includes(speaker);
    };

    const handleSpeakerClick = (speaker) => {
        if (isActiveSpeaker(speaker)) {
            setActiveSpeakers(activeSpeakers.filter((activeSpeaker) => activeSpeaker !== speaker));
            setDescriptionVisible(false);
        } else {
            setActiveSpeakers([...activeSpeakers, speaker]);
            setDescriptionVisible(true);
        }
    };

    const renderDesktopVersion = () => (
        <div className='jay' >
            <div className="buttons-container">
                <button className={`year-button ${year === 2023 ? 'active' : ''}`} onClick={() => handleYearChange(2023)}>2023</button>
                <button className={`year-button ${year === 2024 ? 'active' : ''}`} onClick={() => handleYearChange(2024)}>2024</button>
            </div>
            <div className="container">
                {speakers[year].map((speaker, index) => (
                    <a
                        key={index}
                        href={youtubeLinks[speaker]}
                        onMouseEnter={() => handleHover(speaker)}
                        onMouseLeave={handleLeave}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`box box-${index + 1}`}
                        style={{ '--img': `url(/assets/speaker${year}/${speaker}.jpg)` }}
                        data-text={speaker}
                    ></a>
                ))}
            </div>
            {isDescriptionVisible && hoveredSpeaker && (
                <div className="hovered-speaker-description">
                    {speakerDescriptions[hoveredSpeaker]}
                </div>
            )}
        </div>
    );

    const renderMobileVersion = () => (
        <div className='jay-mobile' style={{ backgroundColor: 'black' }}>
            {/* <div className="buttons-container">
                <button className={`year-button ${year === 2023 ? 'active' : ''}`} onClick={() => handleYearChange(2023)}>2023</button>
                <button className={`year-button ${year === 2024 ? 'active' : ''}`} onClick={() => handleYearChange(2024)}>2024</button>
            </div> */}
            <div className="mobile-container">
                {speakers[year].map((speaker, index) => (
                    <div
                        key={index}
                        onClick={() => handleSpeakerClick(speaker)}
                        className={`mobile-speaker-card ${isActiveSpeaker(speaker) ? 'active' : ''}`}
                    >
                        <img src={`/assets/speaker${year}/${speaker}.jpg`} alt={speaker} className="mobile-speaker-image" />
                        <div className={`mobile-speaker-details ${isDescriptionVisible && hoveredSpeaker === speaker ? 'visible' : ''}`}>
                            <div className="mobile-speaker-name" onMouseEnter={() => handleSpeakerHover(speaker)} onMouseLeave={handleSpeakerLeave}>
                                {speaker}
                            </div>
                            <div className="mobile-speaker-description">
                                {speakerDescriptions[speaker]}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="year-buttons-container">
                <button className={`year-button ${year === 2023 ? 'active' : ''}`} onClick={() => handleYearChange(2023)}>2023</button>
                <button className={`year-button ${year === 2024 ? 'active' : ''}`} onClick={() => handleYearChange(2024)}>2024</button>
            </div>
        </div>
    );

    return isMobile ? renderMobileVersion() : renderDesktopVersion();
}

export default SpeakerPage;