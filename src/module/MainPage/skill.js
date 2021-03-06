import React, { Fragment } from "react";
import { CaretRightFill } from "react-bootstrap-icons";
const skill = () => {
  return (
    <Fragment>
      <h4>
        <b>Kỹ năng tổng quát</b>
      </h4>
      <ul>
        <li>
          <CaretRightFill
            size={15}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>Có khả năng chịu áp lực cao</div>
        </li>
        <li>
          <CaretRightFill
            size={15}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>Tác phong làm việc tỉ mỉ, cần cù</div>
        </li>
        <li>
          <CaretRightFill
            size={15}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>Có kỹ năng làm việc nhóm</div>
        </li>
        <li>
          <CaretRightFill
            size={15}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>Có khả năng làm việc độc lập</div>
        </li>
      </ul>
    </Fragment>
  );
};

export default skill;
