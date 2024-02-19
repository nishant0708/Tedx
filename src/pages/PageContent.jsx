import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './pagecontent.css'
import { Power0 } from 'gsap';
// import About from './About';

export default function PageContent({title, desc, img}){
    return(
        <div className="about-container">
                                <div className="abouttext">
                                    <div className='about-heading'> {title} </div>
                                    <div className="content"> {desc} </div>
                                </div>
                                <div className="aboutimg">

                                    <img src={img} />
                                </div>
                            </div>
    );
}