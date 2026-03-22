import React, { useState } from 'react';
import ShowTime from './components/ShowTime';
import ReactDemo from './components/ReactDemo';

const App: React.FC = () => {
  
  return (
    <div className="app">
      <ReactDemo />
      <ShowTime />
    </div>
  );
};

export default App;
