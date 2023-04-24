import React from 'react';
import styles from './Banner.module.css';

function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Cafe </span>
        <span className={styles.title2}>Finder</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops.</p>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
}

export default Banner;
