import React from 'react';
// import './ProjectCard.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" className="projectCard">
      <img className="hover" src={src} alt={`${h3} logo`} />
      {/* <div className="cardContent"> */}
        <h3>{h3}</h3>
        <p>{p}</p>
      {/* </div> */}
    </a>
  );
}

export default ProjectCard;
