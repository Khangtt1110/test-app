import React from "react";
import { useState } from "react";
import Content from "./Content";
import Resize from "./Resize";

function MuontAndUnmount() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
      {!show && <Resize />}
    </>
  );
}

export default MuontAndUnmount;
