import React from 'react';
import classes from './Experiance.module.css';

export const Experiance = () => {
  return (
    <section className={classes.experiance}>
      <h1 className={classes.title}>EXPERIENCE</h1>
      <div className={classes.divider} />

      <div className={classes.container}>
        <div className={classes.card}>
          <h2 className={classes.subtitle}>Student</h2>
          <div className={classes.cardContent}>
            <h3 className={classes.cardTitle}>Mate Academy</h3>
            <p className={classes.cardText}>Ukraine Mar 2022 - Dec 2022</p>
          </div>
        </div>

        <div className={classes.line} />

        <div className={classes.card}>
          <h2 className={classes.subtitle}>Full Stack Developer</h2>
          <div className={classes.cardContent}>
            <h3 className={classes.cardTitle}>UnivisLabs</h3>
            <p className={classes.cardText}>
              Alanya/Turkey Jan 2023 - Mar 2024
            </p>
          </div>
        </div>

        <div className={classes.line} />

        <div className={classes.card}>
          <h2 className={classes.subtitle}>Full Stack Developer</h2>
          <div className={classes.cardContent}>
            <h3 className={classes.cardTitle}>Murano Software</h3>
            <p className={classes.cardText}>Remote Apr 2024 - Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};
