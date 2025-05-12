const UseCallback = () => {
    return (<>
        <div className="content">
            useCallback is a React Hook that returns a memoized version of a callback function, which only changes if one of its dependencies has changed.
            <ul>
                <li>
                    It Pass functions as props to child components (to avoid unnecessary re-renders).
                </li>
                <li>
                    It prevent's a function from being recreated on every render.
                </li>
            </ul>
            <b>Syntax :</b>
            <pre>
                <code>{`const memoizedCallback = useCallback(() => {
  // Your function logic
}, [dependencies]);
`}</code>
            </pre>

            <strong><a href="https://codesandbox.io/p/sandbox/vvymp7?file=%2Fsrc%2FUseCallback.js" target="blank">Click here for REFERENCE</a></strong>
            <br />
            <br />
            From the above reference code
            <br />
            🧠 Without useCallback:
            <br />
            The handleClick function is recreated on every render.
            <br />
            So {`<Child />`} re-renders even if its props didn't really change.
            <br />

            <br />
            ✅ With useCallback:
            <br />
            handleClick stays the same reference across renders (unless dependencies change).
            <br />

            {`<Child />`} does not re-render unnecessarily thanks to React.memo.
            <br />
            <br />



            <div>
                <b> Difference between useCallback and useMemo</b>
                <table border="1" cellpadding="8" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Hook</th>
                            <th>Purpose</th>
                            <th>Returns</th>
                            <th>Common Use Case</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>useCallback</code></td>
                            <td>Memoizes a <strong>function</strong></td>
                            <td>A memoized <strong>function</strong></td>
                            <td>Prevent unnecessary re-renders of children</td>
                        </tr>
                        <tr>
                            <td><code>useMemo</code></td>
                            <td>Memoizes a <strong>value (result of a function)</strong></td>
                            <td>A memoized <strong>value</strong></td>
                            <td>Avoid expensive recalculations</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </>)
}

export default UseCallback;