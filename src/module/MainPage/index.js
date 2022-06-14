import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MainPage.scss";
import avata from "./../../asset/image/avata.jpg";
import Contact from "./contact.js";
import Skill from "./skill.js";
import Content from "./content.js";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DiepKienThanh-CV</title>
        <link rel="icon" href="." />
        <meta name="description" content="CV-Diep Kien Thanh" />
      </Helmet>
      <Container fluid>
        <Row className="profile-header">
          <Row className="profile-hero">
            <Col lg={4} md={6} sm={6} style={{ textAlign: "center" }}>
              <img src={avata} alt="avata" className="profile-avata" />
            </Col>
            <Col lg={8} md={6} sm={6} className="profile-avata-content">
              <div className="profile-avata-name">
                <h3>DIỆP KIẾN THÀNH</h3>
                <span className="language">
                  <Link to={"/project1"}>中文</Link>
                </span>
              </div>
              <p>
                <i>Chuyên ngành: Lập trình Web (Frontend)</i>
              </p>

              <div className="profile-avata-content-desc">
                <p>
                  Bằng kiến thức và đam mê của mình, tôi mong muốn được phát huy
                  và cống hiến kỹ năng, sự hiểu biết của mình và việc phát triển
                  để có thể đóng góp, cống hiến cho quý công ty.
                </p>
              </div>
            </Col>
          </Row>
        </Row>

        <Row className="profile-content">
          <Col lg={4} md={4} sm={6} className="profile-side">
            <div className="profile-side-content">
              <Contact />
              <div className="profile-side-line"></div>
              <Skill />
            </div>
          </Col>

          <Content />
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
