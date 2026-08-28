import React, { useState } from "react";

export default function InputExample() {
  const [name, setName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Halo, {name}</p>
    </div>
  );
}
