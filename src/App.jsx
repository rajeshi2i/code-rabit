import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(count;

  const setCountVal = () => {
    const countVal = count + 1;
    setCount(countVal);
  };

  const setAnotherCountVal = () => {
    const countVal = count + 1;
    setCount(countVal);
  };

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCountVal()}>count is {count}</button>
        <button onClick={() => setAnotherCountVal()}>count is {count}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        <p>
          Val
      </p>
      </p>
    </>
  );
}

export default App;
