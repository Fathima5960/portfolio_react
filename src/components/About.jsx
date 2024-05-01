import React from "react";
import "./about.css";
import { Col, Container, Tab, Nav, Row } from "react-bootstrap";
import image from "./images/pic1.jpg";
function About() {
  return (
    <>
      <section id="about">
        <Container>
          <Row>
            <Col>
              <div className="img d-flex align-items-center justify-content-center">
                <img src={image} alt="" />
              </div>
            </Col>
            <Col className="mt-5 justify-content-center align-items-center ">
              <h2>About me</h2>

              <p>
                I am a frontend developer and UI/UX Designer dedicated to
                translating ideas into visually stunning and user-friendly
                websites. Proficient in creating responsive and pixel-perfect
                designs, I bring a balance of aesthetics and functionality to
                every project.
              </p>
              <section className="project ">
                {" "}
                <Tab.Container id="project" defaultActiveKey="first">
                  <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content style={{ padding: "30px" }}>
                    <Tab.Pane eventKey="first">
                      {" "}
                      <h3>FrontEnd Development</h3>
                      <h5>
                        Creating visually appealing websites with a focus on
                        user experience.
                      </h5>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3>B.Tech in Computer Science and Engineering</h3>
                      <p>College of Engineering Chengannur</p>
                      <h3>Higher-Secondary</h3>
                      <p>VJHSS Alappuzha</p>
                      <h3>High-School</h3>
                      <p>BMV Cherthala</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3>Mearn stack developer Intern</h3>
                      <p>Luminar technolab kakkanad (6 months)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
