import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const content = () => {
  return (
    <Col lg={8} md={8} sm={6} className="profile-right">
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
            <li>HTML - CSS - Javascript - ReactJS (Cơ bản) </li>
            <li>Bootstrap - Tailwindcss</li>
            <li>Hiểu biết cơ bản về Liquid</li>
            <li>Git</li>
          </ul>
        </div>

        <h3 style={{ marginTop: "50px" }}>Kỹ năng khác</h3>
        <div className="profile-desc">
          <ul>
            <li>Có khả năng nghe, nói, đọc, viết tiếng Phổ Thông cơ bản</li>
            <li>Có thể sử dụng tiếng Quảng Đông để giao tiếp</li>
          </ul>
        </div>

        {/* <h3>Dự án đã thực hiện</h3>
          <div
            className="profile-desc"
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Link to={"/project1"}>Project 1</Link>

            <Link to={"/tour"}>Project 2</Link>
          </div> */}
      </div>
    </Col>
  );
};

export default content;
