import React, { Fragment } from "react";
import { CaretRightFill } from "react-bootstrap-icons";
const skill = () => {
  return (
    <Fragment>
      <h4>
        <b>综合能力 : </b>
      </h4>
      <ul>
        <li>
          <CaretRightFill
            size={15}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>具有较强的抗压能力</div>
        </li>
        <li>
          <CaretRightFill
            size={15}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>具有细心、谨慎的作风</div>
        </li>
        <li>
          <CaretRightFill
            size={15}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>良好的团队及独立工作精神</div>
        </li>
        {/* <li>
          <CaretRightFill
            size={15}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>Có khả năng làm việc độc lập</div>
        </li> */}
      </ul>
    </Fragment>
  );
};

export default skill;
