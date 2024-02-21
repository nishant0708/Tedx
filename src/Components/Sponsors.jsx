import { useEffect } from 'react';
import './Sponsors.css';
import gsap from 'gsap';

export default function Sponsors(props){

    useEffect(() => {
        gsap.fromTo('.shubh-sponsor-card',{
            opacity: 0,
            scale: 0.8,
            x: 200,
        },{
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1,
            delay: 2.2,
            ease: "power3.out",
            stagger: {
                each: 0.2
            }
        })
    })

    //console.log(props);
    let img = props.Image.image;
    //console.log(img);
    return(
        <div className='shubh-sponsor-card'>
            <img className='shubh-sponsor-image' src={img}></img>
        </div>
    )
}