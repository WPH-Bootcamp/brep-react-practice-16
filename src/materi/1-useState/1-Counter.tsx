import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  function handlePlus() {
    setCount((item) => item + 1);
  }

  function handleMinus() {
    setCount((item) => item - 1);
  }

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
export default Counter;
