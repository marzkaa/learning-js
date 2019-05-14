import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, removeComment, editComment} from './actions';

const mapDispatchToProps = dispatch => ({
	thumbUp: (id) => dispatch(thumbUpComment(id)),
	thumbDown: (id) => dispatch(thumbDownComment(id)),
	removeComment: (id) => dispatch(removeComment(id)),
	editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);