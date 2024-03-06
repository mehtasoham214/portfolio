import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';
import resumePdf from '../../assets/pdf/Soham_Mehta_Resume.pdf';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Soham_Mehta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  function scrollToSection(event, item) {
    event.preventDefault();
    const section = document.getElementById(item);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="app__navbar-container">
        <ul className="app__navbar-links">
          {['home', 'about', 'skills', 'experience','projects', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`} onClick={(event) => scrollToSection(event, item)}>{item}</a>
            </li>
          ))}
        </ul>
        <div className='app__button-group'>
          <button onClick={handleDownloadResume}>Download Resume</button>
        </div>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='menu-list'
          >
            <div className="svg-display">
              <HiX className="menu-close" onClick={() => setToggle(false)} />
            </div>
            <ul>
              {['home', 'about', 'skills', 'experience','projects', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className='app__button-group'>
              <button onClick={handleDownloadResume}>Download Resume</button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;