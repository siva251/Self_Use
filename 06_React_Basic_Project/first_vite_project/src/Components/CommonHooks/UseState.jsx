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

      <div>
        <b> Types of State</b>
        <table border="1" cellpadding="8" cellspacing="0">
          <thead>
            <tr>
              <th>Local State</th>
              <th>Global State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Needed by only <strong>one or few</strong>  Component</td>
              <td>Migth be Needed by <strong>Many</strong>  Components</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </>)
}

export default UseState;