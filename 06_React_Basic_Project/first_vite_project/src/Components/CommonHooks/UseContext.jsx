const UseContext = () => {
  return (<>
    <div className="content">
      <ul>
        <li>
          The useContext hook in React is used to access data from a React Context without having to pass props manually through every level of the component tree.
        </li>
        <li>
          When you have data (like user info, theme, language, etc.) that many components need, passing it down as props becomes messy. useContext helps you avoid "prop drilling" by giving any component access to shared data directly.
        </li>
      </ul>
      <b>Create a Context:</b>
      <pre><code>{`import { createContext } from "react";
export const userContext = createContext();
`}</code></pre>
      <b>Wrap components in a Provider:</b>
      <pre><code>{`import { createContext, useContext, useState } from "react";
import ComponentB from "./ComponentB";
export const userContext = createContext();
const ComponentA = () => {
  const [user, setUser] = useState("John");
  const [age, setAge] = useState(18);
  return (
    <>
      <div className="box">
        <h3>Component A</h3>
        <userContext.Provider value={user}>
          <ComponentB />
        </userContext.Provider>
      </div>
    </>
  );
};

export default ComponentA;
`}</code></pre>

      <b>Consume it using useContext:</b>
      <pre><code>{`import { useContext } from "react";
import { userContext } from "./ComponentA";

const ComponentD = () => {
  const user = useContext(userContext);
  return (
    <>
      <div className="box">
        <h3>Component D</h3>
      <p>Bye {user}</p>
      </div>
    </>
  );
};

export default ComponentD;
`}</code></pre>

      <div>
        Due to syntax error, can't able add the full code in this page, so Click this sandbox link for ref :
        <strong><a href="https://codesandbox.io/p/sandbox/context-3qh6jt?file=%2Fsrc%2FComponents%2FComponentD.js%3A1%2C1-17%2C1" target="blank">Click here for REFERENCE</a></strong>
      </div>
    </div>
  </>)
}

export default UseContext;