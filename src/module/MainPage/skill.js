import React, { Fragment } from "react";
import { CaretRightFill } from "react-bootstrap-icons";
const skill = () => {
  return (
    <Fragment>
      <h4>
        <b>Skill : </b>
      </h4>
      <ul>
        <li>
          <CaretRightFill size={15} color="#9D8B63" class="icon-bootstrap" />
          <div>Đọc hiểu tài liệu Tiếng Anh</div>
        </li>
        <li>
          <CaretRightFill size={15} color="#9D8B63" class="icon-bootstrap" />
          <div>Chịu được áp lực cao</div>
        </li>
        <li>
          <CaretRightFill size={15} color="#9D8B63" class="icon-bootstrap" />
          <div>Làm việc nhóm</div>
        </li>
        <li>
          <CaretRightFill size={15} color="#9D8B63" class="icon-bootstrap" />
          <div>Có khả năng làm việc độc lập</div>
        </li>
      </ul>
    </Fragment>
  );
};

export default skill;
