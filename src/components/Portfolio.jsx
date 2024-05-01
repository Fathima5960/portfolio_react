import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./portfoilo.css";
import img1 from "./images/wallet.jpg";
import img2 from "./images/simple.png";
import img3 from "./images/bmi.png";
import img4 from "./images/travel.png";
import img5 from "./images/zomato.png";
import img6 from "./images/music.png";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <Container className="projects ">
          <h1 className=" mt-5 mb-4 text-center">Portfolio</h1>
          <h3 className="text-center">My Recent Works</h3>
          <Row className="ms-5 mb-5 mt-5 d-flex align-items-center justify-content-center">
            <Col lg={4} className="mt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    <h4 className="fw-bolder">E-wallet</h4>
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Technology Used:Html,Css, Bootstrap
                  </Card.Text>
                  <a href="https://e-wallet808.netlify.app/">
                    <img
                      src="http://icon-park.com/imagefiles/link_icon1_white.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    <h4 className="fw-bolder">Simple-Interest Calc</h4>
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Technology Used:Html,Css, Bootstrap,React
                  </Card.Text>
                  <a href="#">
                    <img
                      src="http://icon-park.com/imagefiles/link_icon1_white.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    <h4 className="fw-bolder">BMI-Calculator</h4>
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Technology Used:Html,Css, Bootstrap
                  </Card.Text>
                  <a href="https://bmi808.netlify.app/">
                    <img
                      src="http://icon-park.com/imagefiles/link_icon1_white.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="ms-5  d-flex align-items-center justify-content-center">
            <Col lg={4} className="mt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    <h4 className="fw-bolder">Travel Website</h4>
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Technology Used:Html,Css, Bootstrap
                  </Card.Text>
                  <a href="https://travel808.netlify.app/">
                    <img
                      src="http://icon-park.com/imagefiles/link_icon1_white.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    <h4 className="fw-bolder">Zomato Website Clone</h4>
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Technology Used:Html,Css, Bootstrap
                  </Card.Text>
                  <a href="https://zomato808.netlify.app/">
                    <img
                      src="http://icon-park.com/imagefiles/link_icon1_white.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    <h4 className="fw-bolder">Music Website</h4>
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    Technology Used:Html,Css .
                  </Card.Text>
                  <a href="https://musicwebsite808.netlify.app/">
                    <img
                      src="http://icon-park.com/imagefiles/link_icon1_white.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Portfolio;
