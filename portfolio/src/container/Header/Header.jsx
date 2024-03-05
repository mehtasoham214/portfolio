import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { TypeAnimation } from "react-type-animation";
import './Header.scss';
import {AppWrap} from '../../wrapper';

//Icons
import { FaLinkedin, FaSquareGithub} from "react-icons/fa6"
import { TbBrandGmail } from "react-icons/tb";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const icons = [<FaLinkedin />, <FaSquareGithub />, <TbBrandGmail />];
const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span
            className="wave ml-3 text-4xl"
            role="img"
            aria-labelledby="wave"
          >
            👋🏻
          </span>

          <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I'm</p>
              <h1 className='head-text'>Soham</h1>
          </div>
        </div>
      </div>  
      <div className="app__header-badge">
        <div className='tag-cmp app_flex'>
          <p className='p-text'>
          <TypeAnimation
              sequence={[
                  "CyberSecurity Analyst",
                  2000,
                  "Full-Stack Web Developer",
                  2000,
                  "IT Auditor",
                  2000,
                  "React Developer",
                  2000,
                  "PHP Developer",
                  2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "1.5em" }}
            />
          </p>
        </div>
      </div>
      <div className='app__social-group'>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> {/* Assuming you're using Font Awesome */}
        </a>
        {/* GitHub Icon */}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> {/* Assuming you're using Font Awesome */}
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {icons.map((icon, index) => (
        <div className="circle-cmp app__flex" key={index}>
          {
            index % 3 === 0 ? <a href="https://www.linkedin.com/in/mehtasoham214/" target="_blank" rel="noreferrer"><FaLinkedin color='rgba(230, 230, 230, 0.89)' /></a> :
            index % 3 === 1 ? <a href="https://github.com/mehtasoham214" target="_blank" rel="noreferrer"><FaSquareGithub color='rgba(230, 230, 230, 0.89)' /></a> :
            <a href="mailto:mehtasoham214@gmail.com" target="_blank" rel="noreferrer"><TbBrandGmail color='rgba(230, 230, 230, 0.89)' /></a>
          }
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');