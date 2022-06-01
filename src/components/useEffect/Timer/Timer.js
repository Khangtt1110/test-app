import { useEffect, useState } from "react";

function Timer() {
  const [countdown, setCountdown] = useState(180);
  useEffect(() => {
    const timerID = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);
    // Clean the interval time
    return () => clearInterval(timerID);
  }, []);
  return (
    <div>
      <h1>{countdown} </h1>
    </div>
  );
}

export default Timer;
