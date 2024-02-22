import './Header.css';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function Header(props){

    console.log(props.len);
    useEffect(() => {
        
        let tl2 = gsap.timeline();
        tl2.fromTo('.word', {
            y:340,
            
        },
        {
            y:0,
            opacity:1,
            duration: 1,
            ease: "elastic.out(1,0.75)",
            stagger:{
                each:0.1
            },
            delay: 0.7
        })


        //tried to pin but failed

        // window.onload = () => {
        // gsap.to(".meet_our_team-heading", {
        //     scrollTrigger: {
        //     trigger: ".meet_our_team-heading",
        //     markers:true,
        //       pin: true,
        //       end:`${props.len*24}vh`
        //     },
        // })
        // }
        
    }, [])   

    return( 
        <div className='meet_our_team-heading'>
            <h1 className='h1_heading_container'>
                <span className='meet_our_team-heading_words meet_our_team-meet' >
                    {
                        'Meet'.split('').map((word) => {
                            return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                        })
                    }
                </span>
                <span className='meet_our_team-heading_words meet_our_team-our'  >
                {
                    'Our'.split('').map((word) => {
                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                    })
                }
                </span>
                <span className='meet_our_team-heading_words meet_our_team-team'>
                {
                    'Team'.split('').map((word) => {
                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                    })
                }
                </span>
            </h1>
        </div>
    )
}