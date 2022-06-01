import { useEffect, useState } from "react";

function Resize() {
  //Get size of the window
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // Clean the value when call back
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}

export default Resize;
