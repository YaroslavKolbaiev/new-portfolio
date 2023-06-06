import React, { useState, useRef, useEffect } from "react";
import classes from "./Projects.module.css";
import data from "../../data/data.json";
import { DiGithubAlt } from "react-icons/di";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import EventEmitter from "events";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Projects = () => {
  const [addProjects, setAddProjects] = useState(2);
  const [readMore, setReadMore] = useState({});
  const ref = useRef(null);
  const emit = new EventEmitter();

  function onReadMore(index) {
    if (readMore[index]) {
      setReadMore((prev) => {
        const newObj = { ...prev };
        delete newObj[index];
        return newObj;
      });
      return;
    }
    setReadMore((prev) => {
      const newObj = { ...prev };
      newObj[index] = true;
      return newObj;
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        emit.emit("intersect");
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  emit.on("intersect", () => {
    setAddProjects((prev) => prev + 2);
  });

  return (
    <div id="projects" className={classes.projects}>
      <div className="divider" />
      <h1 className={classes.title}>Projects</h1>
      <TransitionGroup className={classes.grid}>
        {data
          .slice(0, addProjects)
          .map(({ id, image, title, description, stack, gitHub, demo }) => {
            const first25Chars = description.split(" ").slice(0, 25).join(" ");
            const after25Chars = description.split(" ").slice(25).join(" ");
            return (
              <CSSTransition key={id} timeout={800} classNames="cardAnimation">
                <div className={classes.card}>
                  <img
                    src={image}
                    alt="project image"
                    className={classes.img}
                  />
                  <div className={classes.header_container}>
                    <h3 className={classes.header}>{title}</h3>
                  </div>
                  <div className={classes.description}>
                    {first25Chars} {readMore[id] && after25Chars}
                    {description.split(" ").length > 25 && (
                      <button
                        onClick={() => {
                          onReadMore(id);
                        }}
                        className={classes.readMore}
                      >
                        {readMore[id] ? "read less" : "...read more"}
                      </button>
                    )}
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
              </CSSTransition>
            );
          })}
      </TransitionGroup>
      <div ref={ref} style={{ width: "1px", height: "1px" }} />
    </div>
  );
};
