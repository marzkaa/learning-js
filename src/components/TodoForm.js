import React from "react";

class TodoForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   name: ''
  };
 }

 onAddTask() {
  this.props.addTask(this.state.name);
  this.state.name = '';
 }
 onHandleAdd(event) {
  this.setState({
   name: event.target.value
  });
 }

 render() {
  return (
   <div>
    <input
     className="form-control"
     type="text"
     value={this.state.name}
     onChange={this.onHandleAdd.bind(this)}
    />
    <button className="btn" onClick={this.onAddTask.bind(this)}>
     Add a task
    </button>
   </div>
  );
 }
}

export default TodoForm;