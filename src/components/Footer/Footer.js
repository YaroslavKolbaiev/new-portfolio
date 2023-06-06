import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
import { BsArrowUpCircle } from "react-icons/bs";

const Footer = () => {
  const srollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.footer}>
      <hr className={classes.divider} />
      <div className={classes.container}>
        <div className={classes.contacts}>
          <div>
            <p className={classes.contact}>CALL</p>
            <Link className={classes.link} href="tel:+380999139994">
              +380999139994
            </Link>
          </div>
          <div>
            <p className={classes.contact}>E-Mail</p>
            <Link
              className={classes.link}
              href="mailto:yaroslavkolbaiev@gmail.com"
            >
              yaroslavkolbaiev@gmail.com
            </Link>
          </div>
        </div>
        <a onClick={srollToTop}>
          <BsArrowUpCircle className={classes.icon} size="3rem" color="#fff" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
