import './TeamSection.css';
import Teams from './Teams';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';
import teamData from '../teamData.json';
import gsap from 'gsap';




export default function TeamSection(){    

    const sectionRefs = {
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
    };


    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        const selectedRef = sectionRefs[selectedValue];
        if (selectedRef && selectedRef.current) {
          selectedRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    //fetching data
    // let data_core = teamData[2024]['Core Team'];
    // let data_web = teamData[2024]['Web-Dev Team'];
    // console.log(data_core);
    // Object.keys(teamData).forEach(element => {
    //     Object.keys(element).forEach(e =>{
    //         console.log(element);
    //         console.log(e);
    //     })
    // });

    const [year, setYear] = useState(true);
    const [len, setLen] = useState(null);

    function yearHandler(){
        setYear(!year);
    }

    useEffect(() => {
        setYear(year);

        
          
    },[])
    // console.log(teamData[2024]["Core Team"].length);

    // let leng = teamData[2024]["Core Team"].length + teamData[2023]["Core Team"].length;
    // console.log(leng);


    
        const [isVisible, setIsVisible] = useState(false);
      
        useEffect(() => {
          const toggleVisibility = () => {
            if (window.pageYOffset > 1700) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          };
      
          window.addEventListener('scroll', toggleVisibility);
      
          // Clean up the event listener
          return () => window.removeEventListener('scroll', toggleVisibility);
        }, []);

        useEffect(() =>{
            if(isVisible){
                gsap.fromTo('.up-container',{
                    opacity: 0,
                    scale: 0.4,
                    x: 0,
    
                },{
                    opacity: 1,
                    scale: 1,
                    x: -100,
                    duration: 1,
                    ease: "power3.out"
                })
            }
            else{
                gsap.fromTo('.up-container',{
                    opacity: 1,
                    scale: 1,
                    x: -100,
    
                },{
                    opacity: 0,
                    scale: 0.1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out"
                })
            }
        }, [isVisible])
      
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };
      
    return(
        <div className="teams-section">
            
            <Header />
            

            <div className='dropdown-wrapper' >

                <select className='dropdown'  onChange={yearHandler}>
                    <option value="2023" >2023</option>

                    <option value="2024" >2024</option>

                </select>
            </div>

            <div>
                {
                    
                    year
                    ?
                    Object.keys(teamData[2023]).map(team =>{
                        //console.log(teamData[2023][team].length);
                        return(
                            <div key={team}>
                                <Teams team_2024={teamData[2023][team]} nm={team}/>
                            </div>
                        )
                    })
                    :
                    Object.keys(teamData[2024]).map(team =>{
                        //console.log(teamData[2024][team]);
                        return(
                            <div key={team}>
                                <Teams team_2024={teamData[2024][team]} nm={team}/>
                            </div>
                        )
                    })
                }
                
            </div>

            <div className='up-container' onClick={scrollToTop} >
                <i class="fa-solid fa-angles-up up_arrow"></i>
            </div>

        </div>
    )
}