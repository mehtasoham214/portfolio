import React,{ useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, Tooltip } from '../../wrapper';

// Icons
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGit, FaSquareGithub, FaFigma, FaPython, FaBootstrap } from "react-icons/fa6";
import { FaAngular, FaLinux, FaWindows } from "react-icons/fa6";
import { TbBrandJavascript, TbBrandGraphql, TbBrandTypescript, TbBrandMongodb } from "react-icons/tb";
import { TbBrandVscode, TbBrandSublimeText, TbTerminal2, TbBrandBitbucket, TbSql } from "react-icons/tb";
import { SiMui, SiTailwindcss, SiMysql, SiPostgresql, SiOracle, SiMariadb, SiJira, SiPostman } from "react-icons/si";
import { SiXampp,SiKalilinux, SiUbuntu, SiFramer, SiApache } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

import './Skills.scss'

const Skills = () => {
  const skillsList = [
    {
      title: 'Development', 
      icon: [<FaHtml5/>, <FaCss3/>, <FaBootstrap/>, <SiFramer/>, <SiTailwindcss/>, <BsFiletypeScss/>, <FaReact/>, <FaAngular/>, <FaPython/>,<FaNodeJs/>,<FaFigma/>, <TbBrandJavascript/>, <TbBrandTypescript/>, <TbBrandGraphql/>, <SiMui/>, <SiApache/>], 
      icondesc:['HTML5', 'CSS3', 'Bootstrap', 'Framer Motion', 'Tailwind CSS', 'SCSS', 'React', 'Angular','Python', 'Node.js', 'Figma', 'JavaScript', 'TypeScript', 'GraphQL', 'Material-UI', 'Apache'], 
      imgURL:[], 
      imgdesc:[]
    },
    {
      title: 'Database', 
      icon: [<SiMysql/>, <TbSql/>, <TbBrandMongodb/>, <SiPostgresql/>, <SiOracle />, <SiMariadb/>], 
      icondesc:['MySQL', 'SQL', 'MongoDB', 'PostgreSQL', 'Oracle', 'MariaDB'], 
      imgURL:[], 
      imgdesc:[]
    },
    {
      title: 'Tool & IDEs', 
      icon: [<TbBrandVscode/>, <TbBrandSublimeText/>, <TbTerminal2/>,<FaGit/>,<FaSquareGithub/>,<TbBrandBitbucket/>, <SiJira/>, <SiPostman/>], 
      icondesc:['Visual Studio Code', 'Sublime Text', 'Terminal', 'Git', 'Github', 'Bit Bucket', 'Jira', 'Postman'], 
      imgURL:[], 
      imgdesc:[],
    },
    {
      title:'Stacks',
      icon:[<SiXampp/>], 
      icondesc:['XAMP'], 
      imgURL:[images.mern,images.mean], 
      imgdesc:['MERN Stack (MongoDB, Express.js, React.js, Node.js)', 'MEAN Stack (MongoDB, Express.js, Angular.js, Node.js)']
    },
    {
      title:'Methods', 
      icon:[], 
      icondesc:[],
      imgURL:[images.agile,images.scrum,images.kanban], 
      imgdesc:['Agile', 'SCRUM', 'Kanban']
    },
    {
      title:'CyberSecurity', 
      icon:[], 
      icondesc:[],
      imgURL:[images.autopsy,images.burp, images.nessus, images.diskdrill], 
      imgdesc:['Autopsy', 'Burp Suit','Nessus', 'Disk Drill'], 
    },
    {
      title:'OS', 
      icon:[<SiKalilinux/>, <FaLinux/>, <SiUbuntu/>, <FaWindows/>],
      icondesc:['Kali Linux', 'Linux', 'Ubuntu', 'Windows'],
      imgURL:[], 
      imgdesc:[]
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app__skills">
      <div className="skill-heading">
        <h1>
          Skills
        </h1>
      </div>
      <div className="skill-subheading">
        <h3 className='head-text'>
          A <span>Skill a Day</span> makes me <span>Who I am</span>
        </h3>
      </div>
      {/* Tabs panel */}
      <div className="skill-container">
        <Tabs className="skills-tabs">
          <TabList className="skills-tablist">
            {skillsList.map((item, index) => (
              <Tab key={`skill-${index}`} className="skills-tab">{item.title}</Tab>
            ))}
          </TabList>
          <div className="mobile-dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              Choose Skill
            </button>
            {isOpen && (
              <TabList className='dropdown-content'>
                {skillsList.map((item, index) => (
                  <Tab key={`skill-${index}`} className="dropdown-item" onClick={toggleDropdown}>
                    {item.title}
                  </Tab>
                ))}
              </TabList>
            )}
          </div>
          {/* Images panel */}
          <div className="img-panel">
            {skillsList.map((item, index) => (
              <TabPanel key={`tooltip-${index}`} className="skills-panel">
                <motion.div
                  key={`image-container-${index}`}
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="image-container"
                  >
                  {item.icon && item.icon.map((icon, iconIndex) => (
                    <Tooltip key={`tooltipBox-${iconIndex}`} text={`${item.icondesc[iconIndex] !== undefined ? item.icondesc[iconIndex] : ''}`}>
                      <motion.div 
                        key={`imageHolder-${iconIndex}`}
                        className="imageHolder"
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                              ease: "easeInOut",
                              duration: 0.5,
                              delay: iconIndex * 0.1,
                              type: 'tween'
                          }
                        }} 
                        exit={{ opacity: 0, x: -50}}
                        
                        whileInView={{opacity: 1}}
                        whileHover={{
                            scale: 1.6,
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                      >
                        {icon}
                      </motion.div>
                    </Tooltip>
                  ))}
                  {item.imgURL && item.imgURL.map((imgURL, imageIndex,imgdesc) => (
                    <Tooltip key={`tooltipBox-${imageIndex}`} text={`${item.imgdesc[imageIndex] !== undefined ? item.imgdesc[imageIndex] : ''}`}>
                      <motion.div 
                        key={`imageHolder-${imageIndex}`} 
                        className='imageHolder'
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                              ease: "easeInOut",
                              duration: 0.5,
                              delay: imageIndex * 0.1,
                              type: 'tween'
                          }
                        }} 
                        exit={{ opacity: 0, x: -50}}
                        
                        whileInView={{opacity: 1}}
                        whileHover={{
                            scale: 1.6,
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                      >
                        <img src={imgURL} alt={imageIndex} />
                      </motion.div>
                    </Tooltip>
                  ))}
                </motion.div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  )
}
export default AppWrap(Skills, 'skills');
