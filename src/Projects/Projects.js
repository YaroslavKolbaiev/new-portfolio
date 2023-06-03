import React, { useState } from "react";
import classes from "./Projects.module.css";
import data from "../data/data.json";
import { DiGithubAlt } from "react-icons/di";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

export const Projects = () => {
  return (
    <div id="projects" className="">
      <div className="divider" />
      <h1 className={classes.title}>Projects</h1>
      <div className={classes.grid}>
        {data.map(({ id, image, title, description, stack, gitHub, demo }) => {
          const [readMore, setReadMore] = useState(false);

          function onReadMore() {
            setReadMore(!readMore);
          }
          const only20Chars = description.split(" ").slice(0, 25).join(" ");
          return (
            <div key={id} className={classes.card}>
              <img src={image} alt="project image" className={classes.img} />
              <div className={classes.header_container}>
                <h3 className={classes.header}>{title}</h3>
              </div>
              <div className={classes.description}>
                {readMore ? description : only20Chars}
                <button onClick={onReadMore} className={classes.readMore}>
                  {readMore ? "...read less" : "...read more"}
                </button>
              </div>
              <div className={classes.stack}>{"[STACK]"}</div>
              <div className={classes.stack_list}>{stack}</div>
              <div className={classes.links}>
                <Link className={classes.link} href={gitHub}>
                  <DiGithubAlt size="3rem" />
                </Link>
                <Link className={classes.link} href={demo}>
                  <AiOutlineLink size="3rem" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
