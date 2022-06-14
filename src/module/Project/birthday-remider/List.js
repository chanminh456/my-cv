import React from "react";
import Style from "./birtday.module.css";
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className={Style.person}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} year</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
