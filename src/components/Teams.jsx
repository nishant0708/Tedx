import TeamCard from './TeamCard';
import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import './Teams.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from '../cardData.json';
import Years from './Years';



gsap.registerPlugin(ScrollTrigger);

export default function Teams(props){


    useEffect(() =>{

        
        gsap.fromTo('.team-word', {
            y:140,
            
        },
        {
            y:0,
            opacity:1,
            stagger:{
                each:0.05
            },
            delay: 1
        })
        
        

        if(window.innerWidth>480){
            const pin = gsap.fromTo(sectionRef.current,{
                translateX:'25vw'
            },{
                translateX:`-${len*17}vw`,
                ease:'none',
                duration:1,
                scrollTrigger:{
                    trigger: triggerRef.current,
                    start:'top top',
                    end:`${len*370} top`,
                    scrub: 3.3,
                    markers: false,
                    pin: true
                }
            })
    
            return() =>{
                pin.kill();
            }
        }else{
            const pin = gsap.fromTo(sectionRef.current,{
                translateX:'25vw',
                
            },{
                translateX:`-${len*68}vw`,
                ease:'none',
                duration:1,
                scrollTrigger:{
                    trigger: triggerRef.current,
                    start:'top top',
                    end:`${len*370} top`,
                    scrub: 3.3,
                    markers: false,
                    pin: true
                }
            })
    
            return() =>{
                pin.kill();
            }
        }
        
        
    }, [])
    

    // console.log(window.innerWidth);

    // rendering data
    const[info, setInfo] = useState(data); 
    // console.log(info);

    let coreTeam = info[2024]['Core Team'];
    // console.log(coreTeam);

    // console.log(props);


    //defining translateX
    let len = coreTeam.length;
    // console.log(len);

    //scroll behavior
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);


    
    return(
        <div className='team' ref={triggerRef}>

           <div className='team-name'>
                    {
                        '-Organisers-'.split('').map((word) => {
                            return word === '' ? <div className='word'>&nbsp;</div> : <div className='team-word'>{word}</div>
                        })
                    }
           </div>

            {/* team cards */}
            <div className='team-cards-container'  ref={sectionRef}>
                {
                    coreTeam.map((member) => {
                        console.log(member.image)
                        return (<TeamCard  className={member.id} name={member.name} img={member.image} cuteness={member.cuteness}
                        info={member.info} anger={member.anger} humour={member.humour} IQ={member.IQ} fun={member.fun} ig={member.ig}/>)
                    })
                }
            </div>
                
        </div>
    )
}