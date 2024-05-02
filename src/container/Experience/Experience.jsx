import React from 'react'
import "./Experience.scss"
import { AppWrap,Tooltip } from "../../wrapper"
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Experience = () => {
  const allData = [
    {
      title: 'Education', 
      data:[
        {name: 'Stevens Institute of Technology', degree: 'MSc', major:'CyberSecurity', duration:'Jan 2022 - Dec 2023'}, 
        {name: 'University of Mumbai', degree: 'BE', major:'Computer Engineering', duration:'Aug 2018 - June 2021'}, 
        {name: `SVKM's Shri Bhagubhai Mafatlal Polytechnic`, degree: 'Diploma', major:'Computer Engineering', duration:'Aug 2014 - June 2018'}
      ]
    },
    {
      title: 'Experience', 
      data:[
        {name: 'Unnati Institute', title:'Web Developer',desc:'Led the development of a dynamic website for Unnati Institute, collaborating closely with stakeholders to meet project objectives. Utilized React.JS for front-end development, creating interactive interfaces showcasing institute services, activities, and testimonials. Leveraged Node.JS for efficient package management. Employed HTML5 for semantic markup and Bootstrap for responsive design, ensuring optimal viewing across devices. Utilized SCSS for advanced styling and layout customization. Implemented Email.JS for seamless communication. Adhered to UX design and accessibility standards. Employed Git for version control and Jira for project management, including task tracking and documentation. Established online presence and business profile on Google.' ,duration:'June 2023 - Jan 2024'},
        {name: 'I2E Consulting Pvt Ltd', title:'Web Developer Intern', desc:`Collaborated on the creation of the Internal Recognition Platform "Pats!" using React, PHP, and JavaScript, boosting peer-to-peer recognition. Additionally, development of newsletters with Microsoft Dynamics, increasing stakeholder engagement, and contributed to improving client websites with WordPress and React, enhancing functionality. Moreover, I revitalized the Official I2E website, resulting in a 25% increase in traffic and a 10% boost in user interaction through implemented blogs and forms.`, duration:'Aug 2021 - Dec 2021'},
        {name: 'Shah and Anchor Kutchhi Engineering College', title:'Web Developer', desc:`Led a team of 6, overseeing error debugging, efficiency improvements, and providing feedback on their work. Designed and developed a Feedback Management System for our college, enabling students to give feedback to professors. Additionally, implemented updates to the website and its file system, enhancing modularity, efficiency, and reducing maintenance costs. Furthermore, created a database for feedback statistical analysis, updated forms using PHP, HTML, Ajax, SQL, and integrated Google Charts for visualization.`, duration:'Jun 2019 - May 2020'}, 
      ]
    },
    {
      title: 'Project', 
      data:[
        {name: 'Portfolio', techStack: ['React','Framer Motion','Bootstrap','SCSS'], githubLink:'https://github.com/mehtasoham214/portfolio'},
        {name: 'Solar Management System', techStack: ['React','Mongo DB','Node.js','Express.js', 'Agile'], githubLink:'https://github.com/mehtasoham214/Solar_Management'},
        {name: 'To know More...', techStack: ['View GitHub, Certificate, Publication'], githubLink:'https://github.com/mehtasoham214/'}
      ]
    }
  ];
  return (
    <Container className="app__experience">
      <Row className='app_experience-section'>
        <Row className="experience-heading">
          <h1>
            Education, Experience and Projects
          </h1>
        </Row>
        <Row className="experience-subheading">
          <h3 className='head-text'>
          EVERY LESSON  <span>A FOUNDATION,</span> EVERY PROJECT <span>A STORY,</span> EVERY EXPERIENCE <span>A JOURNEY</span>
          </h3>
        </Row>
      </Row>

      {/* Cards */}
      <Row className='experience-sections'>
        {/* Education */}
        <Col>
          <Row className="educationsection-heading heading">
            <h2 className='head-text'>
              Education
            </h2>
          </Row>
          {allData[0].data.map((item, index) => (
            <Row className="educationsection-text text" key={index}>
              <h3 className='head-text' style={{marginTop: '1%'}}>
                {item.name}
              </h3>
              <p className='head-text' style={{marginTop: '1%'}}>
                {item.degree} - {item.major}
              </p>
              <p className='head-text' style={{marginTop: '1%'}}>
                {item.duration}
              </p>
            </Row>
          ))}
        </Col>
        {/* Experience */}
        <Col>
          <Row className="experiencesection-heading heading">
            <h2 className='head-text'>
              Experience
            </h2>
          </Row>
          {allData[1].data.map((item, index) => (
            <Tooltip key={`tooltipBox-${index}`} text={item.desc}>
              <Row className="experiencesection-text text" key={index}>
                <h3 className='head-text' style={{marginTop: '1%'}}>
                  {item.name}
                </h3>
                <p className='head-text' style={{marginTop: '1%'}}>
                  {item.title}
                </p>
                <p className='head-text' style={{marginTop: '1%'}}>
                  {item.duration}
                </p>
              </Row>
            </Tooltip>
          ))}
        </Col>
        {/* Project */}
        <Col>
          <Row className="projectsection-heading heading">
            <h2 className='head-text'>
              Project
            </h2>
          </Row>
          {allData[2].data.map((item, index) => (
            <Row className="projectsection-text text" key={index}>
              <h3 className='head-text'>
                {item.name}
              </h3>
              <p className='head-text' style={{marginTop: '1%'}}>
                {item.techStack.join(', ')}
              </p>
              <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                <motion.a 
                  href={item.githubLink}
                  whileInView={{opacity: 1}}
                  whileHover={{scale: 1.2}}
                  transition={{duration: 0.5, type:'tween'}}
                  className='head-text'
                  target="_blank"
                  rel="noreferrer"
                  style={{marginTop: '1%'}}
                >
                  <button>
                    Github
                  </button>
                </motion.a>
                {/* If name is 'To know More' display 2 buttons for Certification and publication*/}
                {item.name === 'To know More...' && (
                  <>
                    <motion.a 
                    href="https://www.linkedin.com/in/mehtasoham214/details/certifications/"
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.2}}
                    transition={{duration: 0.5, type:'tween'}}
                    className='head-text'
                    target="_blank"
                    rel="noreferrer"
                    style={{marginTop: '1%'}}
                  >
                    <button>
                      View Certificate
                    </button>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/mehtasoham214/details/publications/"
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.2}}
                    transition={{duration: 0.5, type:'tween'}}
                    className='head-text'
                    target="_blank"
                    rel="noreferrer"
                    style={{marginTop: '1%'}}
                  >
                    <button>
                      View Publication
                    </button>
                  </motion.a>
                  </>
                )}
              </div>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default AppWrap(Experience, "experience");
