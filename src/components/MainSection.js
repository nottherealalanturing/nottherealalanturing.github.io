import React from 'react';
import styles from './styles/MainSection.module.css';

const MainSection = () => (
  <main className={styles.main}>
    <h1>
      I&apos;m Assad,
      <br />
      Glad to see you!
    </h1>
    <p className={styles.description}>
      I’m a software developer! I can help you build a product , feature or website Look through
      some of my work and experience! If you like what you see and have a project you need coded,
      don’t hestiate to contact me.
    </p>
    <a href="#contact" className={styles.socials}>
      LET&apos;S CONNECT
    </a>
    <ul className="socials-icons mt--24 mb--12">
      <li className="twitter-icon">
        <a title="twitter" href="https://twitter.com/assadeesaa">
          <img src="./assets//Icons/twitter.svg" alt="twitter-icon" />
        </a>
      </li>
      <li className="linkedin-icon">
        <a title="linkedin" href="https://www.linkedin.com/in/assadisah/">
          <img src="./assets//Icons/linkedin.svg" alt="Linkedin Icon" />
        </a>
      </li>
      <li className="medium-icon">
        <a title="medium" href="/">
          <img src="./assets/Icons/medium.svg" alt="medium icon" />
        </a>
      </li>
      <li className="github-icon">
        <a title="github" href="https://github.com/nottherealalanturing">
          <img src="./assets/Icons/github.svg" alt="github icon" />
        </a>
      </li>
      <li className="angel-icon">
        <a title="angel" href="/">
          <img src="./assets/Icons/angel-list.svg" alt="angel icon" />
        </a>
      </li>
    </ul>
  </main>
);

export default MainSection;
