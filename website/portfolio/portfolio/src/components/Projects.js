import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Netflix UI",
      description: "UI",
      imgUrl: projImg2,
    },
    {
      title: "Amazon UI",
      description: "UI",
      imgUrl: projImg1,
    },
    {
      title: "Guess the number",
      description: "A simple Game",
      imgUrl: projImg3,
    },
    {
      title: "Tic Tac Toe game",
      description: "A simple game",
      imgUrl: projImg4,
    },
    {
      title: "Phonepe UI",
      description: "UI",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
  <Container>
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Projects</h2>
              <p>I created a web development project that showcases my skills in HTML, CSS, JavaScript, and React. It features responsive design, interactive elements, and highlights my understanding of frontend development.</p>
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
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  {/* Other Tab.Pane elements */}
                </Tab.Content>
              </Tab.Container>
            </div>
          }
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
  <img className="background-image-right" src={colorSharp2} alt="Background" />
</section>

  )
}

