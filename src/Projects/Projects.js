import React from "react";
import classes from "./Projects.module.css";
import data from "../data/data.json";

export const Projects = () => {
  return (
    <div id="projects" className="">
      <div className="divider" />
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.grid}>
        {data.map(({ id, image, title, description }) => (
          <div key={id} className={classes.card}>
            <img src={image} alt="project image" className={classes.img} />
            <div className={classes.header_container}>
              <h3 className={classes.header}>{title}</h3>
            </div>
            <p className={classes.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
