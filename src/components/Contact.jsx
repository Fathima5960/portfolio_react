import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./contact.css";
import img1 from "./images/contact-img.svg";

function Contact() {
  return (
    <>
      <section id="contact">
        <Container className=" contact mt-5 mb-5">
          <Row className="d-flex align-items-center justify-content-center mt-2">
            <Col lg={6}>
              <img src={img1} alt="" width={500} height={500} />
            </Col>
            <Col lg={6} className="mt-3">
              <h1 className="fw-bolder">Get in Touch</h1>
              <Form className="mt-5">
                <Row >
                  <Col lg={5}>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col lg={5}>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Last Name"
                    />
                  </Col>
                </Row>
                <Row >
                  <Col lg={5}>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col lg={5}>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Phone No."
                    />
                  </Col>
                </Row>
                <Row >
                  <Col lg={5}>
                    <textarea
                      name=""
                      id=""
                      cols="63"
                      rows="5"
                      style={{ backgroundColor: "white", borderRadius: "30px" }}
                    ></textarea>
                  </Col>
                </Row>

                <button className="mt-4 ">SEND</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
