import React from "react";

const Portfolio = (props) => {
  return (
    <main id="portfolio">
      <section id="welcome">
        <h1>Welcome</h1>
      </section>
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
