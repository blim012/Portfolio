import React from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import gsap from "gsap";
import ImageViewer from 'react-simple-image-viewer';

const Project = (props) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const {
    imageSrc,
    projectName,
    description,
    demoLink,
    githubLink
  } = props;
  const image = [imageSrc];
  const projectImageRef = useRef();
  const projectInfoRef = useRef();

  useEffect(() => {
    gsap.to(projectInfoRef.current, {
      yPercent: -60,
      ease: "none",
      scrollTrigger: {
        trigger: projectInfoRef.current,
        scrub: true
      }
    });
  }, []);

  // const setImageParallax = () => {
  //   const frameHeight = projectImageRef.current.parentElement.clientHeight;
  //   const imageHeight = projectImageRef.current.offsetHeight;
  //   const percentDiff = (1 - (frameHeight / imageHeight)) * 100;

  //   gsap.to(projectImageRef.current, {
  //     yPercent: Math.floor(percentDiff),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: projectImageRef.current,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true
  //     }, 
  //   });
  // };

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  });

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <article className="project">
        <div className="project-image-frame">
          <img 
            className="project-image" 
            src={imageSrc}
            alt={`Screenshot of the ${projectName} demo`}
            ref={projectImageRef}
            // onLoad={setImageParallax}
            onClick={openImageViewer}
          />
        </div>
        <div 
          className="project-info"
          ref={projectInfoRef}
        >
          <h1 className="project-header">{projectName}</h1>
          <p className="project-description">{description}</p>
          <div className="project-links">
            <a 
              href={demoLink} 
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a 
              href={githubLink} 
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </article>
      {isViewerOpen &&
        <ImageViewer 
          src={image}
          currentIndex={0}
          disableScroll={true}
          onClose={closeImageViewer}
          closeOnClickOutside={true}
          backgroundStyle={{backgroundColor: "rgba(0,0,0,0.9)"}}
        />
      }
    </>
  );
};

export default Project;
