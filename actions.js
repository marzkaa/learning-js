import uuid from uuid; 
const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(text, id) {
    return {
        type: REMOVE_COMMENT,
        text,
        id
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id   
    }
}

function thumbUpComment(thumbs, id) {
    return {
        type: THUMB_UP_COMMENT,       
        thumb: ++thumb,
        id
    }
}

function thumbDownComment(thumbs, id) {
    return {
        type: THUMB_DOWN_COMMENT,
        thumb: --thumb,
        id
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUp = id => dispatch(thumbUp(thumbs, id));
const boundThumbDown = id => dispatch(thumbDown(thumbs, id));

