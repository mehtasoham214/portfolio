import React from 'react'
import "./Experience.scss"
import { AppWrap } from "../../wrapper"
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
        {name: `Shri Bhagubhai Mafatlal Ploytechnic`, degree: 'Diploma', major:'Computer Engineering', duration:'Aug 2014 - June 2018'}
      ]
    },
    {
      title: 'Experience', 
      data:[
        {name: 'Unnati Institute', title:'Web Developer', duration:'Jan 2023 - May 2023'},
        {name: 'I2E Consulting Pvt Ltd', title:'Web Developer Intern', duration:'Aug 2021 - Dec 2021'},
        {name: 'Shah and Anchor Kutchhi Engineering College', title:'Web Developer', duration:'Dec 2019 - Mar 2020'}, 
      ]
    },
    {
      title: 'Project', 
      data:[
        {name: 'Portfolio', techStack: ['React','Framer Motion','Bootstrap','SCSS'], githubLink:'https://github.com/mehtasoham214/portfolio'},
        {name: 'Solar Management System', techStack: ['React','Mongo DB','Node.js','Express.js', 'Agile'], githubLink:'https://github.com/mehtasoham214/Solar_Management'},
        {name: 'To know More...', techStack: ['View GitHub, Certificate, Publication'], githubLink:'https://github.com/mehtasoham214/Solar_Managemen'}
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
                    href="https://www.coursera.org/account/accomplishments/certificate/4WZ5KQK3J3XK"
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

export default AppWrap(Experience, "experience")