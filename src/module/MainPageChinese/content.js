import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const content = () => {
  return (
    <Col lg={8} md={8} sm={6} className="profile-right">
      <div className="profile-right-content">
        <h3> 学历 </h3>
        <div className="profile-working">
          <div className="profile-year" style={{ padding: "10px" }}>
            2016 <br /> 2019
          </div>
          <div className="profile-place">
            胡志明市经济 - 技术大专学校 <br />
            <small>专业：技术信息 – 软件</small>
          </div>
        </div>

        <h3 style={{ marginTop: "50px" }}> 工作经验 </h3>
        <div className="profile-working">
          <div className="profile-year" style={{ padding: "10px" }}>
            2020 <br /> 2022 / 03
          </div>
          <div className="profile-place">
            Callme 责任有限公司 <br />
            <small>担任程序设计员</small>
          </div>
        </div>
        <div className="profile-desc">
          <ul>
            <li>以现有的资源设计网站</li>
            <li>应用 ADOBE、PHOTOSHOP 等软件整理图片</li>
            <li>负责 Haravan、Shopify、Itop、Wordpress 等企业的网站运营</li>
          </ul>
        </div>

        {/* <h3 style={{ marginTop: "50px" }}>Công nghệ - Ngôn ngữ sử dụng</h3>
        <div className="profile-desc">
          <ul>
            <li>HTML - CSS - Javascript - ReactJS (Cơ bản) </li>
            <li>Bootstrap - Tailwindcss</li>
            <li>Hiểu biết cơ bản về Liquid</li>
            <li>Git</li>
          </ul>
        </div> */}

        <h3 style={{ marginTop: "50px" }}>语言</h3>
        <div className="profile-desc">
          <ul>
            <li>粤语：运用较好四门技能 （越南华人）</li>
            <li>国语：中级</li>
            <li>英语：中级，阅读能力较强</li>
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
