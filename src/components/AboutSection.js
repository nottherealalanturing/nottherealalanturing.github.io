import React from 'react';
import {
  FaTwitter, FaLinkedin, FaMediumM, FaGithub, FaAngellist,
} from 'react-icons/fa';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import styles from './styles/AboutSection.module.css';

const AboutSection = () => (
  <section className="about-section" id="about">
    <div className="about-top">
      <h2 className="about-primary-text">
        About
        <br />
        Myself
      </h2>
      <p className="about-secondary-text">
        Hello I’m a software developer! I can help you build a product , feature or website Look
        through some of my work and experience! If you like what you see and have a project you need
        coded, don’t hestiate to contact me.
      </p>
      <div className="mb--12">
        <a href="#connect" className="about-sec-connect mb--12">
          LET&apos;S CONNECT
        </a>
        <ul className={styles.socialsIcons}>
          <li>
            <a
              title="twitter"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/assadeesaa"
            >
              <FaTwitter className={styles.icons} />
            </a>
          </li>
          <li>
            <a
              title="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/assadisah/"
            >
              <FaLinkedin className={styles.icons} />
            </a>
          </li>
          <li>
            <a
              title="medium"
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@nottherealalanturing"
            >
              <FaMediumM className={styles.icons} />
            </a>
          </li>
          <li>
            <a
              title="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/nottherealalanturing"
            >
              <FaGithub className={styles.icons} />
            </a>
          </li>
          <li>
            <a
              title="angel"
              target="_blank"
              rel="noreferrer"
              href="https://angel.co/u/nottherealalanturing"
            >
              <FaAngellist className={styles.icons} />
            </a>
          </li>
        </ul>
      </div>
      <button type="button" className="get-resume-btn mb--12">
        Get my resume
      </button>
    </div>

    <ul className="skill-list mb--12">
      <li className="skill-list__li">
        <a className="accordion" href="#languages">
          <h3>Languages</h3>
          <FiChevronDown />
        </a>
        <ul className="panel active">
          <li className="skill-item">
            <img src="./assets/Icons/javascript.svg" alt="javascript" />
            <span>JavaScript</span>
          </li>
          <li className="skill-item">
            <img src="./assets/Icons/html.svg" alt="html.svg" />
            <span>HTML</span>
          </li>
          <li className="skill-item">
            <img src="./assets/Icons/css.svg" alt="css.svg" />
            <span>CSS</span>
          </li>
          <li className="skill-item">
            <img src="./assets/Icons/react-icon.svg" alt="react.svg" />
            <span>React</span>
          </li>
        </ul>
      </li>
      <li className="skill-list__li">
        <a className="accordion" href="#framework">
          <h3>Framework</h3>
          <FiChevronRight />
        </a>
        <ul className="panel" />
      </li>

      <li className="skill-list__li">
        <a className="accordion" href="#skills">
          <h3>Skills</h3>
          <FiChevronDown />
        </a>
        <ul className="panel" />
      </li>
    </ul>
  </section>
);

export default AboutSection;
