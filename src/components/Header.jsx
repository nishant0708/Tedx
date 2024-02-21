import './Header.css';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';

export default function Header(){

    
    useEffect(() => {
        
        let tl2 = gsap.timeline();
        tl2.fromTo('.word', {
            y:340,
            
        },
        {
            y:0,
            opacity:1,
            stagger:{
                each:0.05
            },
            delay:0.1
        }).to('.word',{
            opacity: 0.6,
            duration:0.4
        })
    }, [])   

    return( 
        <div>
            <h1 className='team-heading'>
                <span className='team-heading_words meet' >
                    {
                        'Meet'.split('').map((word) => {
                            return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                        })
                    }
                </span>
                <span className='team-heading_words our'  >
                {
                    'Our'.split('').map((word) => {
                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
                    })
                }
                </span>
                <span className='team-heading_words teame'>
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