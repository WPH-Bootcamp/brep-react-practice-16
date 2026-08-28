import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", e);
    setCount((prev) => prev + 1);
  };
  return <button onClick={handleClick}>Klik {count}</button>;
}

export default Button;
