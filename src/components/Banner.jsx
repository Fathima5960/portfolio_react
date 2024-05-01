import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./banner.css";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <>
      <section className="banner " id="home">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={6} >
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`I'm Fathima N K `}
                <span
                  className="wrap"
                  style={{ fontWeight: "bold", fontFamily: "Bungee Spice" }}
                >
                  {text}
                </span>
              </h1>
              <a
                href="src\assets\Fathima_Resume.pdf"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button>Get Resume</button>
              </a>
            </Col>

            <Col className="d-flex align-items-center justify-content-center">
              <img
                src="https://personal-website-tawny-tau.vercel.app/static/media/hero.88ad6fa72bdd944347e99eeebdb71684.svg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
