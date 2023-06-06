import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiJsBadge } from "react-icons/di";
import { FaTelegramPlane } from "react-icons/fa";
import classes from "./HeaderStyles.module.css";

export const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link href="/" className={classes.portfolioLink}>
          <DiJsBadge size="4rem" />{" "}
          <span style={{ fontSize: "24px", marginLeft: "5px" }}>Portfolio</span>
        </Link>
      </div>
      <div className={classes.headerLinks}>
        <li>
          <Link className={classes.NavLink} href="tel:+380999139994">
            +380999139994
          </Link>
        </li>
        <li>
          <Link
            className={classes.NavLink}
            href="mailto:yaroslavkolbaiev@gmail.com"
          >
            Email
          </Link>
        </li>
      </div>
      <div className={classes.socialLinks}>
        <a
          className={classes.socialIcons}
          href="https://github.com/YaroslavKolbaiev"
        >
          <AiFillGithub size="3rem" />
        </a>
        <a
          className={classes.socialIcons}
          href="https://www.linkedin.com/in/rick-kolbaiev-616727233/"
        >
          <AiFillLinkedin size="3rem" />
        </a>
        <a className={classes.socialIcons} href="https://t.me/Rick_Kolbaiev">
          <FaTelegramPlane size="3rem" />
        </a>
      </div>
    </div>
  );
};
