import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';


const TodoList = props => {
	const taskList = props.taskList.map(item =>
		<Todo item={item} remove={props.remove} />
	);
	return <ul className={style.TodoList} >{taskList}</ul>
}

export default TodoList;   