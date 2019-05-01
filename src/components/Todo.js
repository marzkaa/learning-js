import React from "react";

const Todo = props => {
  return (
    <div className="task">
      <li>{props.data.text}</li>
    </div>
  );
};

export default Todo;