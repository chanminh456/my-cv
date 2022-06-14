import React, { Fragment } from "react";
import {
  PhoneVibrateFill,
  EnvelopeFill,
  GeoAltFill,
} from "react-bootstrap-icons";
const contact = () => {
  return (
    <Fragment>
      <h4>
        <b>联系方式： </b>
      </h4>
      <ul>
        <li>
          <PhoneVibrateFill
            size={45}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>
            <b> 电话号码 </b>
            <br />
            <a href="tel:0763004331"> 076 300 4331 </a>
          </div>
        </li>
        <li>
          <EnvelopeFill size={45} color="#9D8B63" className="icon-bootstrap" />
          <div>
            <b> 电子邮箱 </b>
            <br />
            <a href="mailto:kienthanhdiep10101998@gmail.com">
              <small>
                kienthanhdiep10101998
                <br />
                @gmail.com
              </small>
            </a>
          </div>
        </li>
        <li>
          <GeoAltFill size={45} color="#9D8B63" className="icon-bootstrap" />
          <div>
            <b> 地址 </b>
            <br />
            <small>平政郡</small>
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

export default contact;
