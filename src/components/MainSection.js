import React from 'react';
import { FaTwitter, FaLinkedin, FaMediumM, FaGithub, FaAngellist } from 'react-icons/fa';
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
    <ul className={styles.socialsIcons}>
      <li>
        <a title="twitter" href="https://twitter.com/assadeesaa">
          <FaTwitter className={styles.icons} />
        </a>
      </li>
      <li>
        <a title="linkedin" href="https://www.linkedin.com/in/assadisah/">
          <FaLinkedin className={styles.icons} />
        </a>
      </li>
      <li>
        <a title="medium" href="https://medium.com/@nottherealalanturing">
          <FaMediumM className={styles.icons} />
        </a>
      </li>
      <li>
        <a title="github" href="https://github.com/nottherealalanturing">
          <FaGithub className={styles.icons} />
        </a>
      </li>
      <li>
        <a title="angel" href="https://angel.co/u/nottherealalanturing">
          <FaAngellist className={styles.icons} />
        </a>
      </li>
    </ul>
  </main>
);

export default MainSection;
