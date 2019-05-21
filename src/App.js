import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      <CommentsList/>
      <DevTools />
    </div>
  );
};

export default App;