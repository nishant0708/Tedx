import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './page.css'
import { Power0 } from 'gsap';
// import About from './About';
import PageContent from './PageContent';


function Page() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap-card-trigger",
                start: "top 25%",
                end: "+=4000",
                scrub: 2,
                stagger: 0.2,
                pin: ".gsap-card-trigger",
                pinSpacer: false,
                // pin: "page-heading-1",
                pinType: 'fixed'
            }
        });

        tl.set('.gsap-card--1', {
            scaleX: 0.9,
            y: '0',
            ease: Power0.easeIn
        }, 'start');

        tl.set('.gsap-card--2', {
            scaleX: 0.95,
            y: '400%',
            ease: Power0.easeNone
        }, 'start');

        tl.set('.gsap-card--3', {
            scaleX: 1,
            y: '400%',
            ease: Power0.easeNone
        }, 'start');

        tl.set('.gsap-card--4', {
            scaleX: 1.1,
            y: '400%',
            ease: Power0.easeNone
        }, 'start');
        
        tl.to('.gsap-card--1', {
            scaleX: 0.83,
            y: '0',
            ease: Power0.easeIn
        });
        tl.to('.gsap-card--2', {
            y: '20',

            ease: Power0.easeIn
        });

        tl.to('.gsap-card--2', {
            scaleX: 0.87,
            ease: Power0.easeIn
        });

        tl.to('.gsap-card--3', {
            y: '40',
            ease: Power0.easeIn
        });

        tl.to('.gsap-card--3', {
            scaleX: 0.93,
            ease: Power0.easeIn
        });

        tl.to('.gsap-card--4', {
            y: '60',
            ease: Power0.easeIn
        });

        tl.to('.gsap-card--4', {
            scaleX: .97,
            ease: Power0.easeIn
        });
    }, []);

    return (
        <React.Fragment>
            {/* <section className="relleno"></section> */}

            {/* START: section-cards */}
            <section className="section-cards">
           
                <div className="section-cards__container">
                <h1 className='page-heading-1'>
                                About TED
                            </h1>
                    <ul className="section-cards__list gsap-card-trigger">
                        <li className="card card--1 gsap-card gsap-card--1">
                           
                            <PageContent title="About TED"
                                desc="TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community."
                                img="https://tedxwinterpark.com/wp-content/uploads/2020/05/TEDxEvento-682b9876.jpg"
                            />

                        </li>
                        <li className="card card--2 gsap-card gsap-card--2">
                            <PageContent title="About TEDx"
                                desc="TEDx is a program created by TED (Technology, Entertainment, Design), a global
                        platform known for its conferences featuring influential speakers and thought
                        leaders. TEDx events are independently organized, community-driven gatherings
                        licensed by TED.
                        These events aim to spark deep discussions, share innovative ideas, and inspire
                        individuals within local communities. In order to organize a TEDx event, it is
                        imperative to possess a TEDx License, which is issued to individuals who undergo a
                        rigorous application process. "
                                img="https://tedxwinterpark.com/wp-content/uploads/2020/05/TEDxEvento-682b9876.jpg"
                            />

                        </li>
                        <li className="card card--3 gsap-card gsap-card--3">
                            <PageContent title="About FLiC"
                                desc="FLiC is a student club, originating
                        from IET DAVV and expanding across
                        the entire DAVV, that equips its
                        members with the tools to navigate
                        the ever-changing financial landscape
                        through engaging activities,
                        workshops, and mentorship programs.
                        With a shared vision of financial
                        independence, FLiC fosters a
                        supportive environment that
                        encourages students to explore their
                        potential and take control of their
                        financial future."
                                img="https://tedxwinterpark.com/wp-content/uploads/2020/05/TEDxEvento-682b9876.jpg"
                            />

                        </li>
                        <li className="card card--4 gsap-card gsap-card--4">
                            <PageContent title="About TEDxDAVV"
                                desc="TEDxDAVV is an inspiring TEDx event driven by the spirited students of DAVV (Devi
                            Ahilya Vishwavidyalaya). It serves as a platform for students to create a stage where
                            ideas thrive and are shared with a broader audience. This student-led initiative
                            reflects their passion for knowledge, encourages critical thinking, and fosters a
                            culture of innovation.
                            TEDxDAVV empowers students to challenge the status quo, engage in
                            thought-provoking discussions, and make a meaningful impact on society. It
                            showcases the limitless potential of student-driven initiatives and their ability to
                            shape a brighter future. "
                                img="https://tedxwinterpark.com/wp-content/uploads/2020/05/TEDxEvento-682b9876.jpg"
                            />


                        </li>
                    </ul>
                </div>
            </section>
            {/* END: section-cards */}
            {/* <section className="relleno"></section> */}

        </React.Fragment>
    );
}

export default Page;
