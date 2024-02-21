import './SponsorsSection.css';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import Sponsors from './Sponsors';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SponsorData from '../Sponors.json';

gsap.registerPlugin(ScrollTrigger);

 function SponsorsSection(){

    useEffect(() => {
        
        let tl2 = gsap.timeline();
        tl2.fromTo('.word', {
            y:340,
            opacity: 0
            
        },
        {
            y:100,
            opacity:1,
            stagger:{
                each:0.1
            },
            delay:0.7,
            duration:1.5,
             ease: "elastic.out(1,0.5)",
        })

       
        const pin = gsap.fromTo(sponsorContainerRef.current,{
            translateX:'25vw',
        },{
            translateX:`-${sponsorLen*17}vw`,
            ease:'none',
            duration:1,
            scrollTrigger:{
                trigger: sponsorTriggerRef.current,
                start:'top top',
                end:`${sponsorLen*370} top`,
                scrub: 3.3,
                markers: false,
                pin: true
            }
        })
        return() =>{
            pin.kill();
        }
    

        
    }, [])  

    let sponsor_2024 = SponsorData[2024];
    //console.log(sponsor_2024);
    

    //length for shifting sponsor container
    let sponsorLen = sponsor_2024.length;
    console.log(sponsorLen);


    const sponsorTriggerRef = useRef(null);
    const sponsorContainerRef = useRef(null);
    
    return(
        <div className='sponsor-wrapper' ref={sponsorTriggerRef}>
            <h1 className='sponsor-heading'>
                    {
                        'Sponsors'.split('').map((word) => {
                            return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                        })
                    }
            </h1>


            <div className='sponsors-container' ref={sponsorContainerRef}>
                {
                    sponsor_2024.map((sponsor) => {
                        //console.log(sponsor.image);
                        return (<Sponsors Image={sponsor}/>)
                    })
                }
            </div>

            
        </div>
    )
}
export default SponsorsSection 