import React, { useEffect } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const Mob = () => (
    /* NavBar for Mobile  */
    <>
      <nav className={styles.navMob}>
        <a href="/" className={styles.logoMob}>
          Assad Isah
        </a>
        <HiOutlineMenuAlt3 className={styles.hamburgerMob} onClick={() => setShow(true)} />
      </nav>
      <div
        className={styles.overlayMob}
        style={{
          width: show ? '100%' : '0',
        }}
      >
        <MdOutlineClose className={styles.closebtn} onClick={() => setShow(false)} />
        <ul className={styles.overlayContentMob}>
          <a href="#works" onClick={() => setShow(false)}>
            Portfolio
          </a>
          <a href="#about" onClick={() => setShow(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setShow(false)}>
            Contact
          </a>
        </ul>
      </div>
    </>
  );

  const Dsk = () => (
    /* NavBar for Desktop  */
    <nav className={styles.navDsk}>
      <a href="/" className={styles.logoDsk}>
        Assad Isah
      </a>
      <ul className={styles.navlistDsk}>
        <li>
          <a className={styles.navlistItemDsk} href="#works">
            Portfolio
          </a>
        </li>
        <li>
          <a className={styles.navlistItemDsk} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={styles.navlistItemDsk} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );

  return (
    /* MediaQuery  */
    <header>
      {width > 0 && width <= 800 && <Mob />}
      {width > 800 && <Dsk />}
    </header>
  );
};

export default Navbar;
