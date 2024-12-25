import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <>
      <div style={{marginLeft: "750px", fontSize: "50px"}}>{count}</div>
      <div style={{marginLeft: "712px"}}>
        <button style={{width: "50px", height: "50px"}} onClick={dec}>-</button>
        <button style={{width: "50px", height: "50px", marginLeft: "20px"}} onClick={inc}>+</button>
      </div>
    </>
  );
}
