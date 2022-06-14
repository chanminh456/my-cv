import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MainPage.scss";
import avata from "./../../asset/image/avata.jpg";
import Contact from "./contact.js";
import Skill from "./skill.js";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <Container fluid>
      <Row className="profile-header">
        <Row className="profile-hero">
          <Col lg={4} md={6} sm={6} style={{ textAlign: "center" }}>
            <img src={avata} alt="avata" className="profile-avata" />
          </Col>
          <Col lg={8} md={6} sm={6} className="profile-avata-content">
            <h3>
              <b>DIỆP KIẾN THÀNH</b>
            </h3>
            <p>
              <i>Chuyên ngành: Lập trình Web (Frontend)</i>
            </p>

            <div className="profile-avata-content-desc">
              <p>
                Bằng kiến thức và đam mê của mình, tôi mong muốn được phát huy
                và cống hiến kỹ năng, sự hiểu biết của mình và việc phát triển,
                xây dựng các sản phẩm đóng góp cho quý công ty.
              </p>
            </div>
          </Col>
        </Row>
      </Row>

      <Row className="profile-content">
        <Col lg={4} md={4} sm={4} className="profile-side">
          <div className="profile-side-content">
            <Contact />
            <div className="profile-side-line"></div>
            <Skill />
          </div>
        </Col>

        <Col lg={8} md={8} sm={8} className="profile-right">
          <div className="profile-right-content">
            <h3> Học vấn </h3>
            <div className="profile-working">
              <div className="profile-year" style={{ padding: "10px" }}>
                2016 <br /> 2019
              </div>
              <div className="profile-place">
                Trường Cao Đẳng Kinh Tế - Kỹ Thuật Hồ Chí Minh <br />
                <small>Chuyên ngành: Công Nghệ Thông Tin - Phần Mềm</small>
              </div>
            </div>

            <h3 style={{ marginTop: "50px" }}> Kinh nghiệm làm việc </h3>
            <div className="profile-working">
              <div className="profile-year">2020</div>
              <div className="profile-place">
                Công ty TNHH Callme <br />
                <small>Lập trình viên (Frontend)</small>
              </div>
            </div>
            <div className="profile-desc">
              <ul>
                <li>Thiết kế Website dựa theo bản thiết kế có sẵn</li>
                <li>Sử dụng Adobe Photoshop để cắt ảnh</li>
                <li>
                  Có kiến thức sử dụng nền tảng hỗ trợ triển khai web cho doanh
                  nghiệp Haravan, Shopify, ITop, Wordpress
                </li>
              </ul>
            </div>

            <h3 style={{ marginTop: "50px" }}>Công nghệ - Ngôn ngữ sử dụng</h3>
            <div className="profile-desc">
              <ul>
                <li>HTML - CSS - Javascript </li>
                <li>Bootstrap - Tailwindcss</li>
                <li>ReactJS</li>
                <li>Hiểu biết căn bản về Liquid</li>
                <li>Git</li>
              </ul>
            </div>

            <h3>Dự án đã thực hiện</h3>
            <div
              className="profile-desc"
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link to={"/project1"}>Project 1</Link>

              <Link to={"/tour"}>Project 2</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
