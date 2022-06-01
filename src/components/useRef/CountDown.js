import { useRef, useState } from "react";

function CountDown() {
  const timerID = useRef();

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerID.current);
  };

  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default CountDown;
