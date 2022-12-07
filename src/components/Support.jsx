import { useState } from "react";

export default () => {
  // Gives us a variable in memory called count and a function to update it called setCount
  const [count, setCount] = useState(0);

  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? 'Click to Support' : `Supported ${count} times`}
    </button>
  )
}