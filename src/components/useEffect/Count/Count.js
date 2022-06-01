import { useEffect, useLayoutEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  

  useLayoutEffect (() => {
    if (count > 3) setCount(0);
  }, [count]);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Count</button>
    </div>
  );
}

export default Count;
