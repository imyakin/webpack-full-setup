import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </>
  );
}
