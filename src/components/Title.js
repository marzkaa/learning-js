import React from "react";

const Title = props => {
  return (
    <section className="title-section">
      <h1>{props.title}</h1>
      <h3>You have {props.thingsNumber} things to acomplish.</h3>
    </section>
  );
};

export default Title;