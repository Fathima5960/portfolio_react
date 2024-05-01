import React from "react";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div>
        <Row className="d-flex justify-content-center align-items-center mt-5">
          <Col className="d-flex justify-content-center align-itemms-center">
            <div>
              <p className="mt-4">Feel free to contact me..</p>
            </div>
          </Col>
          <Col>
            <Row>
              <Col
              // className="mt-3 mb-2 d-flex justify-content-center"
              >
                <a
                  title="Linkdin"
                  target="__blank"
                  href="https://www.linkedin.com/in/fathima-nk-ba0802241/"
                >
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                </a>
              </Col>
              <Col
              // className="mt-3 mb-2 d-flex justify-content-center"
              >
                <a
                  title="Mail"
                  target="__blank"
                  href="mailto:fathimacec@gmail.com "
                >
                  <i class="fa-brands fa-at fa-2xl"></i>
                </a>
                {/* <a title="Github" target="__blank" href="#">
                  <i class="fa-brands fa-github fa-2xl"></i>
                </a> */}
              </Col>
              <Col
              // className="mt-3 mb-2 d-flex justify-content-center"
              >
                <a
                  title="Whatsapp"
                  target="__blank"
                  href=" https://wa.me/918086725960"
                >
                  <i class="fa-brands fa-whatsapp fa-2xl"></i>
                </a>
              </Col>
              {/* <Col
                className="mt-3  d-flex justify-content-center"
            
              >
                <a
                  title="Mail"
                  target="__blank"
                  href="mailto:fathimacec@gmail.com "
                >
                  <i class="fa-brands fa-at fa-2xl"></i>
                </a>
              </Col> */}
            </Row>
          </Col>
        </Row>
        <div className="mt-5">
          <p class="text-center mt-0 fs-6 opacity-25">
            All rights reserved © 2023
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
