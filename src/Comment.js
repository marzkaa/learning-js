import React from 'react';

const Comment = ({text, votes, id, thumbUp, thumbDown, removeComment, editComment}) =>
	<li>
		{text} <span>votes: {votes}</span>
		<button onClick={() => thumbUp(id)}>Thumb up</button>
		<button onClick={() => thumbDown(id)}>Thumb Down</button>
		<button onClick={() => removeComment(id)}>Delete</button>	
	</li>;

export default Comment;