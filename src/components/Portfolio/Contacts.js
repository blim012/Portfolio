import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import EmailIcon from '../../static/email.png';
import ResumeIcon from '../../static/resume.png';
import GithubIcon from '../../static/github.png';

const Contacts = (props) => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#contacts',
      start: 'center center-=150px',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress;
        fadeIn('#email', progress);
        fadeIn('#resume', progress);
        fadeIn('#github', progress);
      }
    });

    function fadeIn(element, progress) {    
      gsap.to(element, {
        scale: progress,
        duration: 0.3
      });
    }
  }, [])

  return (
    <section id="contacts">
      <ul id="contacts-list">
        <li id="email" className="contact">
          <a 
            className="contact-link" 
            href="mailto:brandonlimchi@gmail.com"
          >
            <p>brandonlimchi@gmail.com</p>
            <img src={EmailIcon} alt="Email Icon" />
          </a>
        </li>
        <li id="resume" className="contact">
          <a 
            className="contact-link"
            href="https://drive.google.com/file/d/1AkdsHGDXdBMQNPNGuVRBPRdfdBiiuANB/view" 
            target="_blank"
          >
            <p>Résumé</p>
            <img src={ResumeIcon} alt="Resume Icon" />
          </a>
        </li>
        <li id="github" className="contact">
          <a 
            className="contact-link"
            href="https://github.com/blim012" 
            target="_blank"
          >
            <p>Github</p>
            <img src={GithubIcon} alt="Github Icon" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
