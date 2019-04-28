import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: "Things to do."
    };
  }
  get tasksList() {
    return this.props.tasksList.map((data, key) => (
      <Todo key={key} data={data} />
    ));
  }

  render() {
    return (
      <div>
        <h3>{this.state.listName}</h3>
        <ol>{this.tasksList}</ol>
      </div>
    );
  }
}

export default TodoList;