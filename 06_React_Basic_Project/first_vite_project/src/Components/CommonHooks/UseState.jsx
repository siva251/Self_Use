const UseState = () => {
    return (<>
        <div className="content">
            The useState hook in React lets you add state to functional components. It’s one of the most commonly used hooks.
            <pre><code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
`}</code></pre>

        </div>
    </>)
}

export default UseState;