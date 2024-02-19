import React, { useState } from 'react';
import './SpeakerPage.css'; // Assuming you have a separate CSS file for styling

function SpeakerPage() {
    const [year, setYear] = useState(2024);
    const [lineFromYear, setLineFromYear] = useState(null);

    const handleYearChange = (newYear) => {
        setYear(newYear);
        setLineFromYear(newYear);
    };

    const speakers = {
        2023: ["Levi", "Light", "red", "punk", "naruto"],
        2024: ["Renji", "Sora", "Kaito", "Tsuki", "Mitsui"]
    };

    // YouTube links for each speaker
    const youtubeLinks = {
        Levi: "https://www.youtube.com/watch?v=_VIDEO_ID",
        Light: "https://www.youtube.com/watch?v=_VIDEO_ID",
        red: "https://www.youtube.com/watch?v=_VIDEO_ID",
        punk: "https://www.youtube.com/watch?v=_VIDEO_ID",
        naruto: "https://www.youtube.com/watch?v=_VIDEO_ID",
    };

    return (
        <div>

            <div className="buttons-container">
                <button className={`year-button ${year === 2023 ? 'active' : ''}`} onClick={() => handleYearChange(2023)}>2023</button>
                <button className={`year-button ${year === 2024 ? 'active' : ''}`} onClick={() => handleYearChange(2024)}>2024</button>
            </div>

            <span className="speaker-text"> <span style={{ color: '#EB0028' }}>Our</span> <span style={{ color: 'white', fontFamily: 'Helvetica' }}>Speakers</span></span>
            
            <div className="container">
                {speakers[year].map((speaker, index) => (
                    <a
                        key={index}
                        href={youtubeLinks[speaker]} // Set the href to the YouTube link of the speaker
                        target="_blank" // Open the link in a new tab
                        rel="noopener noreferrer" // Security measure
                        className={`box box-${index + 1}`}
                        style={{ '--img': `url(/assets/speaker${year}/${speaker}.jpg)` }}
                        data-text={speaker}
                    ></a>
                ))}
            </div>
        </div>
    );
}

export default SpeakerPage;
