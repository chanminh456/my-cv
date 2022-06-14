import React from "react";
import Tour from "./Tour";
import Style from "./tour.module.css";
const Tours = ({ tours, removeTour }) => {
  return (
    <div className={Style.section}>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </div>
  );
};

export default Tours;
