import './SponsorSectionMobile.css';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import Sponsors from './Sponsors';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SponsorData from '../Sponors.json';

gsap.registerPlugin(ScrollTrigger);

export default function SponsorMobileSection(){

    useEffect(() => {
        
        let tl2 = gsap.timeline();
        tl2.fromTo('.word', {
            y:140,
            opacity: 0
            
        },
        {
            y:0,
            opacity:1,
            stagger:{
                each:0.1
            },
            delay:0.05,
            duration:1.5,
             ease: "elastic.out(1,0.9)",
        })

        // const pin = gsap.fromTo(sponsorContainerRefMobile.current,{
        //     translateX:'25vw',
        // },{
        //     translateX:`-${sponsorLen*60}vw`,
        //     ease:'none',
        //     duration:1,
        //     scrollTrigger:{
        //         trigger: sponsorTriggerRefMobile.current,
        //         start:'top top',
        //         end:`${sponsorLen*370} top`,
        //         scrub: 2,
        //         markers: false,
        //         pin: true
        //     }
        // })
        
        const pin2 = gsap.fromTo('.sponsor_scroll',{
            translateX:'25vw',
        },{
            translateX:`-${sponsorLen*60}vw`,
            ease:'none',
            duration:1,
            scrollTrigger:{
                trigger: '.sponsor-wrapper-Mobile',
                // start:'top top',
                end:`${sponsorLen*1000}`,
                scrub: 2,
                markers: false,
                pin: true
            }
        })

        gsap.fromTo('.sponsor_image',{
            yPercent: 100,
            scale: 0.2,
            opacity:0.4
        },{
            yPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: 2,
            ease: "power2.out"
        })


        
        return() =>{
            pin2.kill(); 
        }
    }, [])  

    let sponsor_2024 = SponsorData[2024];
    //console.log(sponsor_2024);
    

    //length for shifting sponsor container
    let sponsorLen = sponsor_2024.length;
    //console.log(sponsorLen);


    const sponsorTriggerRefMobile = useRef(null);
    const sponsorContainerRefMobile = useRef(null);
    const sponsorContainerRefMobile2 = useRef(null);
    
    
    return(
        <div className='sponsor-wrapper-Mobile' ref={sponsorTriggerRefMobile}>
           <div className='sponsor-heading-Mobile-container'>
                <h1 className='sponsor-heading-Mobile'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile and'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile and'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile and'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile and'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
                <h1 className='sponsor-heading-Mobile and'>
                        {
                            'Sponsors'.split('').map((word) => {
                                return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                            })
                        }
                </h1>
           </div>


            <div className='sponsors-container-Mobile sponsor_scroll' ref={sponsorContainerRefMobile}>
                {
                    sponsor_2024.map((sponsor) => {
                        console.log(sponsor.image);
                        return (<Sponsors className='sponsor_image' Image={sponsor}/>)
                    })
                }
            </div>

            <div className='sponsors-container-Mobile2 sponsor_scroll' ref={sponsorContainerRefMobile}>
                {
                    sponsor_2024.map((sponsor) => {
                        console.log(sponsor.image);
                        return (<Sponsors className='sponsor_image' Image={sponsor}/>)
                    })
                }
            </div>
        </div>
    )
}