import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './flip.css';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

function BoxItem({ frontImage, backImage, header, description }) {

  return (
    <div className="box-item flip-box">
      <div className="flip-box-front text-center" style={{ backgroundImage: `url(${frontImage})` }}>
        <div className="inner color-white">
          <h3 className="flip-box-header">{header}</h3>
        </div>
      </div>
      <div className="flip-box-back text-center" style={{ backgroundImage: `url(${backImage})` }}>
        <div className="inner inner-content color-white">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Flip() {
  const isMobile = useMediaQuery({ maxWidth: 750 });

  useEffect(() => {
    if (isMobile) {
      const flipBoxes = document.querySelectorAll('.flip-box');

      flipBoxes.forEach((flipBox, index) => {
        const tl = gsap.timeline({ paused: true });
        const duration = 0.3;
        const delay = index * duration;

        tl.to(flipBox, { rotateY: '180deg', duration, delay });
  
        ScrollTrigger.create({
          trigger: flipBox,
          start: 'top 40%',
          end: 'bottom 60%',
          animation: tl,
          //markers: true,
        //   toggleActions: 'restart none none reverse',
          onLeave: () => {
            tl.reverse();
          }
        });
      });
    }
  }, [isMobile]);

  return (
    <div className="box-container">
      <BoxItem
        frontImage="https://tedxwinterpark.com/wp-content/uploads/2021/02/tedx.jpg"
        backImage="https://tedxwinterpark.com/wp-content/uploads/2021/02/tedx.jpg"
        header="About TED"
        description="TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community."
      />
      <BoxItem
        frontImage="/tedx.png"
        backImage="/tedx.png"
        header="About TEDx"
        description="TEDx is a program created by TED (Technology, Entertainment, Design), a global
        platform known for its conferences featuring influential speakers and thought
        leaders. TEDx events are independently organized, community-driven gatherings
        licensed by TED.
        These events aim to spark deep discussions, share innovative ideas, and inspire
        individuals within local communities. In order to organize a TEDx event, it is
        imperative to possess a TEDx License, which is issued to individuals who undergo a
        rigorous application process."
      />
      <BoxItem
        frontImage="/tedxdavv.jpg"
        backImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAEsCAMAAABgwwj8AAAA51BMVEUCAAH///8AAQAAAQMFAQEAAgAQAAAAAgMLAAADAAPXAywHAAD08vPXACjYACj39fYaAACeCyeurK3TBS0XFRbCwMGACSCjoqNmZGXQzs96eHlqBxvLCC+0srMWAACMCiIfAAC0CylkCx8mBgjOzM3n5eZ2FSuYDSZ2DiNWCxSWDyp4CR8wAQdTEiU8Awt+DSadm5woJycsKyyQj484NzedEC9xCxWdDCNaBhO+DTNMAxBBQEBNDhzHBzLIBip8BhmuCCNcW1uyDTF1c3RpBhVOTU6MByeqDjKIhodIBApBDxqNCR9fXl5jCVP+AAAEe0lEQVR4nO3Xa1PaWhQG4GRlh1wgQdxAuES5KKUWjwWxCt5axaqn7f//PWetneCklzPTD3F65sz7OCU7CYXXlb12omUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD856k/HeBfkSjufneWc5Ol1B/LT07guZ5nQpLrkueYEb/yYcnueZ4VBJZyXeUqy/O2QYu/0nZDP398iVEdv1KpCt76ViXn+1XFR3jjS20Dz/clvl8JnLz2hfLnw5cDhZNEZWV11JtGZtpovD16N93uydjsTGfH/HV/vXs8qb5vvKnyl6t5kiTzDh819aXFvMlxqNPJQtFiebrMA9LyrJyk5FQ/6DCMojDmn8Z5ysM4kn8XD2nMJ8Iw1OuVRQdP6cX5zc0RZ6Omvcu6tee8knN7Y4LWzD7Rskv2VXbqzC6rpI71QWstSbVOp+c6inkgGv1Uxpw1jteXLl2u9W3a9j0T1Fzcq/oyCzbhZDxD83S836PWMguatMq79Nf9fvsmim8/9vvXfR1F933jsq/j6NPDbMp59VQ5NNPR/ZDcIAsqgRb2QrZ3E6qZwd6uCXpaJzlG0oy1b6X1k8u1Gd7H8WjITT/Wcfgxb5VxGukBT8N+GkfrY4cewuiioiRQM7+e1JpLIffmZmBxic0vMN/j/z35bI7USmsmy+XPO5Cg+17AQaN49HUg+hwwHFBA9BRG6SW/JwzTFW0vvQm66UrQepM6E1mcaNKRfclIu1xdj3aT0nLyBwUcIopGQwmaxtJBTE+lmdpUdelRR3rFr6NGOjpxi0E/1zhSjyco1U9NLXlGZnWVU3K4pJ4Xilw6WMcclDyuaJg3U9p4SCMOyjeDRx2nq+v1zer4KR349GPQLjc/JTI96VTSJYmZwJO7bKaWFlS+0ATd8SQor0vbZuKgA17k9+/DOP37y/iyQifjo333JShRh4up7E2n01maMlJ3w/1jqkjLFs/eJXdUqUFHEtSRoFGhmUL9teIPZzwdRjtyh63KEl+89HsJ0XPt8LB7eGib5uFpINPVynu/1iy1oC9BHQka3V5k9yO+9DGP72U5bcv907O87OFkW9GmfUrSQEKmp6JmLVsAsmvPsa3XqihXj+9KfDsKeY7y0NCNISlZFxU/ntDLgr+YcEHPbGVCL+qBlPRws60i9VqtXrkFleVJ6zyolpD8oi8ebkxXhel6cCCrlDxgBGbbtHu93nPLTqR1WtsCSir6Zm9vRXyjqpfbSvyZO+P37bHPXf9l1t46Onnblr3Zip9JnKD49maLcaNI6OQqL+Dm2TT73l0eLqD5c8k5ZYmSNqFs+xNXKvndL/bynOcVn+3yU4W3lZ2TXKV4beJG8Rz+MfPfCQLXcwzXUj9+5a8ekl8rXRGvORxH8vDfGiqrqyLlKyOo8k3hNb/+9zmuBCKH25r3AsGBPUWBQ2aHfvtPJfrFCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6n/gF461yc6bDMJgAAAABJRU5ErkJggg=="
        header="About TEDxDAVV"
        description="TEDxDAVV is an inspiring TEDx event driven by the spirited students of DAVV (Devi
          Ahilya Vishwavidyalaya). It serves as a platform for students to create a stage where
          ideas thrive and are shared with a broader audience. This student-led initiative
          reflects their passion for knowledge, encourages critical thinking, and fosters a
          culture of innovation.It showcases the limitless potential of student-driven initiatives and their ability to
          shape a brighter future."
      />
      <BoxItem
        frontImage="https://media.licdn.com/dms/image/C4D0BAQEDcGJB_Qo_kA/company-logo_200_200/0/1675614011308?e=2147483647&v=beta&t=54yskpQKVsJdxaVvGYysKwctLhJgqL0eFeUHSPF3bZ0"
        backImage="https://media.licdn.com/dms/image/C4D0BAQEDcGJB_Qo_kA/company-logo_200_200/0/1675614011308?e=2147483647&v=beta&t=54yskpQKVsJdxaVvGYysKwctLhJgqL0eFeUHSPF3bZ0"
        header="About FliC"
        description="FLiC is a student club, originating
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
      />
    </div>
  );
}

export default Flip;
