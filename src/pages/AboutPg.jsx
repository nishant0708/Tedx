import React from 'react';
import About from './About';

export default function AboutPg() {
    return (
        <div className="aboutpg">
            <div className="stacked-cards">
                <About title='About FLiC' desc="FLiC is a student club, originating
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
                financial future." />
                <About title='About TEDx DAVV' desc="TEDxDAVV is an inspiring TEDx event driven by the spirited students of DAVV (Devi
                Ahilya Vishwavidyalaya). It serves as a platform for students to create a stage where
                ideas thrive and are shared with a broader audience. This student-led initiative
                reflects their passion for knowledge, encourages critical thinking, and fosters a
                culture of innovation.
                TEDxDAVV empowers students to challenge the status quo, engage in
                thought-provoking discussions, and make a meaningful impact on society. It
                showcases the limitless potential of student-driven initiatives and their ability to
                shape a brighter future." />
                <About title='About TEDx' desc="TEDx is a program created by TED (Technology, Entertainment, Design), a global
                platform known for its conferences featuring influential speakers and thought
                leaders. TEDx events are independently organized, community-driven gatherings
                licensed by TED.
                These events aim to spark deep discussions, share innovative ideas, and inspire
                individuals within local communities. In order to organize a TEDx event, it is
                imperative to possess a TEDx License, which is issued to individuals who undergo a
                rigorous application process. " />
                <About title='About TED' desc="TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community." />
            </div>
        </div>
    );
}
