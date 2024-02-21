import React, { useState, useEffect } from 'react';
import './mergedPage.css';

function MergedPage() {
    // SpeakerPage state and functions
    const [year, setYear] = useState(2024);
    const [hoveredSpeaker, setHoveredSpeaker] = useState(null);
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);

    const handleSpeakerHover = (speaker) => {
        setHoveredSpeaker(speaker);
        setDescriptionVisible(true);
    };

    const handleSpeakerLeave = () => {
        setHoveredSpeaker(null);
        setDescriptionVisible(false);
    };

    const handleYearChange = (newYear) => {
        setYear(newYear);
    };

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

    const handleDocumentClick = (event) => {
        const isBox = event.target.classList.contains('box');
        const isButton = event.target.classList.contains('year-button');
        const isDescription = event.target.classList.contains('hovered-speaker-description');
    
        if (!isBox && !isButton && !isDescription) {
            setDescriptionVisible(false);
        }
    };

    useEffect(() => {
        const handleClick = (event) => {
            const isBox = event.target.classList.contains('box');
            const isButton = event.target.classList.contains('year-button');
            const isDescription = event.target.classList.contains('hovered-speaker-description');

            //remove hovered-speaker-description when out of focus

            if (!isBox && !isButton && !isDescription) {
                setDescriptionVisible(false);
            }
        };

        document.addEventListener('click', handleClick);
        document.addEventListener('touchend', handleClick);

        // Remove event listeners when component unmounts
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('touchend', handleClick);
        };
    }, []);

    return (
        <div className='jay'>
            {/* SpeakerPage JSX */}
            <div className="buttons-container">
                <button className={`year-button ${year === 2023 ? 'active' : ''}`} onClick={() => handleYearChange(2023)}>2023</button>
                <button className={`year-button ${year === 2024 ? 'active' : ''}`} onClick={() => handleYearChange(2024)}>2024</button>
            </div>
            {/* <span className="speaker-text"> <span style={{ color: '#EB0028', fontSize:'70%'}}>Our</span> <span style={{ color: 'white', fontSize:'70%' }}>Speakers</span></span> */}
            <div className="container">
                {speakers[year].map((speaker, index) => (
                    <a
                        key={index}
                        href={youtubeLinks[speaker]}
                        onMouseEnter={() => handleSpeakerHover(speaker)}
                        onMouseLeave={handleSpeakerLeave}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`box box-${index + 1}`}
                        style={{ '--img': `url(/assets/speaker${year}/${speaker}.jpg)` }}
                        data-text={speaker}
                    ></a>
                ))}
            </div>
            {isDescriptionVisible && hoveredSpeaker && (
                <div className="hovered-speaker-description" >
                    {speakerDescriptions[hoveredSpeaker]}
                </div>
            )}
        </div>
    );
}

export default MergedPage;

