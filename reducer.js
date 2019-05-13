import { combineReducers } from 'redux';

import comments from './comments';

const initialState = {
    comments: []   
};

const app = combineReducers({
    comments   
});

export default reducer;