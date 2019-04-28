import React from "react";

const Title = props => {
  return (
    <section className="title-section">
      <h2>{props.title}</h2>
      <h3>Yoy have {props.thinghsNumber} things to acomplish.</h3>
    </section>
  );
};

export default Title;