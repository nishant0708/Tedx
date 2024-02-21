import TeamCard from './TeamCard';
import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import './Teams.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from '../teamData.json';



gsap.registerPlugin(ScrollTrigger);

export default function Teams(props){

    //fetching props
    // console.log(props);
    // console.log(props.team_2024);
    // console.log(props.nm);
    let nm =props.nm;
    let coreTeam = props.team_2024;
    

    // console.log(coreTeam);

    
    
    

    useEffect(() =>{

        let len = coreTeam.length;
        console.log(len);
        
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
        

        if(len>=4){
            if(window.innerWidth>1000){
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
            }if(window.innerWidth>800){
                const pin = gsap.fromTo(sectionRef.current,{
                    translateX:'45vw',
                    
                },{
                    translateX:`-${len*30}vw`,
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
            }if(window.innerWidth>400){
                const pin = gsap.fromTo(sectionRef.current,{
                    translateX:'130vw',
                    
                },{
                    translateX:`-${len*45}vw`,
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
                    translateX:'100vw',
                    
                },{
                    translateX:`-${len*200}px`,
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
        }
        else{
            if(window.innerWidth > 800){
                const pin2 =gsap.fromTo(sectionRef.current,{
                    translateX:'25vw'
                },{
                    translateX:`-${len*7}vw`,
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
                    pin2.kill();
                }
            }
            else{
                const pin2 =gsap.fromTo(sectionRef.current,{
                    translateX:'95vw'
                },{
                    translateX:`-${len*37}vw`,
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
                    pin2.kill();
                }
            }
        }

        

    }, [])
    

    // console.log(window.innerWidth);

    // rendering data
    // console.log(info);

    

    //scroll behavior
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);


    
    return(
        <div>
            {console.log("we are inside the team card")}
            <div className='team' ref={triggerRef}>

                <div className='single-team-container' >
                    <div className='team-name team-name-organisers'>
                                {
                                    `${nm}`.split('').map((word) => {
                                        return word === '' ? <div className='word'>&nbsp;</div> : <div className='team-word'>{word}</div>
                                    })
                                }
                    </div>

                    {/* team cards */}
                    <div className='team-cards-container team-scroll'  ref={sectionRef}>
                        {
                            coreTeam.map((member) => {
                                // console.log(member.image)
                                return (<TeamCard  className={member.id} name={member.name} img={member.image} cuteness={member.cuteness}
                                info={member.info} anger={member.anger} humour={member.humour} IQ={member.IQ} fun={member.fun} ig={member.ig}/>)
                            })
                        }
                    </div>
                </div>
                    
            </div>
        </div>
    )
}