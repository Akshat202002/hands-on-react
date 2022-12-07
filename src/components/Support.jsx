import { useState, useEffect } from "react";

const pageTitle = document.title;

export default () => {
  // Gives us a variable in memory called count and a function to update it called setCount
  const [count, setCount] = useState(0);
  useEffect(()=>{
    // if (count > 0) {
    //   document.title = `${pageTitle}--${count}`
    // }

    count && (document.title = `${pageTitle}--${count}`)
  })
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? 'Click to Support' : `Supported ${count} times`}
    </button>
  )
}