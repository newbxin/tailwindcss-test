import { useState, useEffect } from 'react';
import './ReactDemo.less';

const ShowTime: React.FC = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="react-demo-box">
      <h1>Hello Webpack + React + TypeScript!</h1>
      <p>Welcome to your new project.</p>
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default ShowTime;
