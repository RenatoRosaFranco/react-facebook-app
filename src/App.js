import React from 'react';
import Header from './components/Layout/Header';
import PostList from './components/Posts/PostList';

function App() {
  return (
    <div className="App">
      <Header />

      <div class='container'>
        <PostList />
      </div>
    </div>
  );
}

export default App;
