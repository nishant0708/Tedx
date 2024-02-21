import './TeamSection.css';
import Teams from './Teams';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';
import teamData from '../teamData.json';




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
    },)
    // console.log(teamData[2024]["Core Team"].length);

    // let leng = teamData[2024]["Core Team"].length + teamData[2023]["Core Team"].length;
    // console.log(leng);
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
                        console.log(teamData[2023][team].length);
                        return(
                            <div key={team}>
                                <Teams team_2024={teamData[2023][team]} nm={team}/>
                            </div>
                        )
                    })
                    :
                    Object.keys(teamData[2024]).map(team =>{
                        console.log(teamData[2024][team]);
                        return(
                            <div key={team}>
                                <Teams team_2024={teamData[2024][team]} nm={team}/>
                            </div>
                        )
                    })
                }
                
            </div>

            {/* <div>
                <div ref={sectionRefs.section1}>
                 <Teams team_2024={data_core} id="organiser1" />
                </div>
                <div ref={sectionRefs.section2}>
                 <Teams team_2024={data_web} id="organiser2" />
                </div>
                <div ref={sectionRefs.section3}>
                 <Teams team_2024={data_core} id="organiser3" />
                </div>
            </div> */}

        </div>
    )
}