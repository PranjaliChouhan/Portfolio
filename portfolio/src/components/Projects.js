import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";
import projImg18 from "../assets/img/project-img18.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FilmFlex",
      description: "Book-movie-shows",
      imgUrl: projImg1,
      vercelUrl:"https://movieticket-booking-fawn.vercel.app/"
    },
    {
      title: "Comments",
      description: "comment-on-image",
      imgUrl: projImg2,
      vercelUrl:"https://comments-gold.vercel.app/"
    },
    {
      title: "CulinaryCanvas",
      description: "share-recipe",
      imgUrl: projImg3,
      vercelUrl:"https://64e32c23c3249769512badbf--poetic-sawine-dee7e8.netlify.app/"
    },
    {
      title: "Accordian",
      description: "questions-answer",
      imgUrl: projImg4,
      vercelUrl:"https://accordian-wine.vercel.app/"
    },
    {
      title: "Login-page",
      description: "login-logout-Forgetpassword",
      imgUrl: projImg5,
      vercelUrl:"https://login-form-eight-rho.vercel.app/"
    },
    {
      title: "Search-Picture",
      description: "Search-any-picture",
      imgUrl: projImg6,
      vercelUrl:"https://search-pictures-five.vercel.app/"
    },
  ];
  const projects2 = [
    {
      title: "click-the-shape",
      description: "play-with-shapes",
      imgUrl: projImg7,
      vercelUrl:"https://click-the-shape-h27d.vercel.app/"
    },
    {
      title: "To-do-list",
      description: "complete-task",
      imgUrl: projImg8,
      vercelUrl:"https://to-do-list-fzgt.vercel.app/?vercelToolbarCode=Vqyn_qLL_XYZsXL"
    },
    {
      title: "Analog-clock",
      description: "clock",
      imgUrl: projImg9,
      vercelUrl:"https://analog-clock-taupe-two.vercel.app/"
    },
    {
      title: "Student-query-registration",
      description: "query-asking-platform",
      imgUrl: projImg10,
      vercelUrl:"https://student-management-system-self.vercel.app/"
    },
    {
      title: "e-commerce-website",
      description: "cart-using-redux",
      imgUrl: projImg11,
      vercelUrl:"https://647451b65889954641239cef--joyful-entremet-f56984.netlify.app/"
    },
    {
      title: "Drum-kit",
      description: "play-with-drums",
      imgUrl: projImg12,
      vercelUrl:"https://drumkit-sigma-nine.vercel.app/"
    },
  ];
  const projects3 = [
    {
      title: "Quiz",
      description: "test-gk",
      imgUrl: projImg13,
      vercelUrl:"https://drumkit-e1ep.vercel.app/"
    },
    {
      title: "side-bar",
      description: "nested-items",
      imgUrl: projImg14,
      vercelUrl:"https://side-bar-phi.vercel.app/"
    },
    {
      title: "TinDog",
      description: "site-for-dogs",
      imgUrl: projImg15,
      vercelUrl:"https://tindog-five-eosin.vercel.app/"
    },
    {
      title: "Simon-game",
      description: "let's-Play",
      imgUrl: projImg16,
      vercelUrl:"https://simon-game-three-xi.vercel.app/"
    },
    {
      title: "Regitration-form",
      description: " register-people",
      imgUrl: projImg17,
      vercelUrl:"https://form-beta-mauve.vercel.app/"
    },
    {
      title: "password-strength-check",
      description: "check-password",
      imgUrl: projImg18,
      vercelUrl:"https://password-strength-checker-git-main-pranjalichouhan.vercel.app/"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Embarking on a wizarding journey within React's enchanted world and the magical MERN stack, I unveil an array of enchanting projects. From crafting responsive spells to conjuring interactive potions, each project is a testament to my commitment to creating user-centric enchantments. Step into this spellbound gallery, where technology and creativity merge to bring you magical web experiences worthy of the wizarding realm.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    
                        
                        <Row>
                   {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      title={<a href={project.vercelUrl} target="_blank" rel="noopener noreferrer">{project.title}</a>}
                      description={project.description}
                      imgUrl={project.imgUrl}
                    />
                  )
                })
              }
            </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                   {
                projects2.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      title={<a href={project.vercelUrl} target="_blank" rel="noopener noreferrer">{project.title}</a>}
                      description={project.description}
                      imgUrl={project.imgUrl}
                    />
                  )
                })
              }
            </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                   {
                projects3.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      title={<a href={project.vercelUrl} target="_blank" rel="noopener noreferrer">{project.title}</a>}
                      description={project.description}
                      imgUrl={project.imgUrl}
                    />
                  )
                })
              }
            </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
