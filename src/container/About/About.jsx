import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import {images} from  '../../constants';
import {AppWrap} from '../../wrapper';
const abouts = [
  {title: 'IT Auditor', description: 'Committed IT Auditor dedicated to safeguarding digital assets and ensuring data integrity.', imgUrl:images.about01},
  {title: 'Security Expert', description: 'I am a Security Professional with a focus on web application security.', imgUrl:images.about02},
  {title: 'Web Developer', description: 'I am a web developer with a passion for making secure, aesthetic and functional websites.', imgUrl:images.about03}
];

const About = () => {
  return (
    <div className='about-profile'>
      <div className="profile-heading">
        <h1>
          About Me
        </h1>
      </div>
      <div className="profile-text">
        <h3 className='head-text'>
          I know that <span>Good Security</span> and <span>Good Design</span><br />means <span>Good Business</span>
        </h3>
      </div>
      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.07}}
          transition={{duration: 0.5, type:'tween'}}
          key={about.title + index}
          className='app__profile-item'
          >
              <div className="profile-wrap">
                <div className="img-holder">
                  <img src={about.imgUrl} alt={about.title} />
                </div>
                <div className="about-text">
                  <h2 className='bold-text' style={{marginTop: 20}}>
                    {about.title}
                  </h2>
                  <p className='p-text' style={{marginTop: 10}}>
                    {about.description}
                  </p>
                </div>
              </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(About, 'about');
