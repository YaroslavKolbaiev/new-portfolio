import React from "react";
import classes from "./HeroStyles.module.css";
import Image from "next/image";
import { BackgroundAnimation } from "../Animation/Animation";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div>
        <Image
          style={{ objectFit: "cover" }}
          className={classes.photo}
          src="/assets/ava.jpg"
          alt="Picture of admin"
          width={720}
          height={720}
        />
        <a className={classes.download} href="/assets/cv.pdf" download>
          Download CV
        </a>
      </div>
      <div>
        <h1 className={classes.title}>
          Welcome To <br />
          My Personal Portfolio
        </h1>
        <p className={classes.text}>
          First and foremost, I love, and I enjoy writing code. Ever since my
          first time learning JavaScript, I fell in love with the feeling every
          time the compiler ran successfully. Since then, it is always not
          enough with coding. For me, coding is technically a problem-solving
          skill that I have to get through the problems, solve it, and make it
          run. That's why I love it. When I had an exciting coding project, I
          can code for hours and hours without checking the time or checking on
          my social media until I finished the project.
        </p>
      </div>
      <BackgroundAnimation />
    </div>
  );
};

export default Hero;
