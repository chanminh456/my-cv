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
        <b>Thông tin liên hệ : </b>
      </h4>
      <ul>
        <li>
          <PhoneVibrateFill
            size={45}
            color="#9D8B63"
            className="icon-bootstrap"
          />
          <div>
            <b> Phone </b>
            <br />
            <a href="tel:0763004331"> 076 300 4331 </a>
          </div>
        </li>
        <li>
          <EnvelopeFill size={45} color="#9D8B63" className="icon-bootstrap" />
          <div>
            <b> Email </b>
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
            <b> Address </b>
            <br />
            <small>
              Ấp Tân Điền, Xã Long Thượng, Huyện Cần Giuộc, Tỉnh Long An
            </small>
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

export default contact;
