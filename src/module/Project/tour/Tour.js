import React, { useState } from "react";
import Style from "./tour.module.css";
const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className={Style.singleTour}>
      <img src={image} alt={name} />
      <footer>
        <div className={Style.tourInfo}>
          <h4>{name}</h4>
          <h4 className={Style.tourPrice}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button
            style={{ color: "blue" }}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "...read more"}
          </button>
        </p>
        <button className="deleteBtn" onClick={() => removeTour(id)}>
          not interesting
        </button>
      </footer>
    </article>
  );
};

export default Tour;
