const UseEffect = () => {
  return (<>
    <div className="content">
      <ul>
        <li>
          The useEffect hook in React is used to perform side effects in function components — such as data fetching, DOM manipulation, event listeners, or timers.
        </li>
        <li> The code inside useEffect will run After initial render and when dependencies change.</li>
        <li>By using Return inside the code, the component will unmount</li>
      </ul>

      <b>Run Once on Mount</b>
      <pre><code>{`import { useEffect } from "react";

const MountExample = () => {
    useEffect(() => {
        console.log("Component mounted");
        }, []); // empty array = run once
        
        return <div>Check the console for mount message.</div>;
        };
        
        export default MountExample;
        `}</code></pre>
      <b>Run on State Change</b>
      <pre><code>{`import { useEffect, useState } from "react";

const StateChangeExample = () => {
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("Age changed to:", age);
  }, [age]); // re-run when age changes

  return (
    <div>
      <p>Age: {age}</p>
      <button onClick={() => setAge((prev) => prev + 1)}>Increase Age</button>
    </div>
  );
};

export default StateChangeExample;
`}</code></pre>

      <b>Cleanup with Interval - Component unmount</b>
      <pre><code>{`import { useEffect } from "react";

const TimerExample = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(timer); // cleanup on unmount
      console.log("Timer cleared");
    };
  }, []);

  return <div>Timer running... check console.</div>;
};

export default TimerExample;
`}</code></pre>

      <div>
        <strong><a href="https://codesandbox.io/p/sandbox/3n8dj6?file=%2Fsrc%2FComponents%2FUseEffect_Unmount.js%3A10%2C18" target="blank">Click here for REFERENCE</a></strong>
      </div>

    </div>
  </>)
}

export default UseEffect;