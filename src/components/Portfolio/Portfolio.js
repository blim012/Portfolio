import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Portfolio = (props) => {
  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      endTrigger: '#projects',
      end: 'top top',
      onEnterBack: () => changeBannerText("Hello, I'm Brandon")
    });
    
    ScrollTrigger.create({
      trigger: '#projects', 
      start: 'top top',
      endTrigger: '#skills',
      end: 'top top',
      onEnter: () => changeBannerText('Some projects I made'),
      onEnterBack: () => changeBannerText('Some projects I made')
    });
    
    ScrollTrigger.create({
      trigger: '#skills', 
      start: 'top top',
      endTrigger: '#contacts',
      end: 'top top',
      onEnter: () => changeBannerText("Here are some things I'm good at"),
      onEnterBack: () => {
        changeBannerText("Here are some things I'm good at")
      }
    });
    
    ScrollTrigger.create({
      trigger: '#contacts', 
      start: 'top top',
      end: 'bottom bottom',
      onEnter: () => changeBannerText("Let's Talk!")
    });
    
    function changeBannerText(text) {
      gsap.to('.banner-text', {
        duration: 1,
        text: text
      });
    }
  }, [])

  return (
    <main id="portfolio">
      <header className="section-banner">
        {'> '}<span className="banner-text">Hello, I'm Brandon</span>
      </header>
      <section id="welcome"></section>
      <section id="projects">
        <h1>Projects</h1>
        <article className="project">
          <h2>Project 1</h2>
        </article>
        <article className="project">
          <h2>Project 2</h2>
        </article>
        <article className="project">
          <h2>Project 3</h2>
        </article>
      </section>
      <section id="skills">
        <h1>Skills</h1>
      </section>
      <section id="contacts">
        <h1>Contact</h1>
      </section>
    </main>
  )
};

export default Portfolio;
