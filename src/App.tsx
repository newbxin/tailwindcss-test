import React, { useState } from 'react';
import ShowTime from './ShowTime';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* <h1>Hello Webpack + React + TypeScript!</h1>
      <p>Welcome to your new project.</p>
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div> */}
      <ShowTime />
    </div>
  );
};

export default App;
