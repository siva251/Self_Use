const ReactMemo = () => {
    return (<>
        <div className="content">
            <ul>
                <li>
                    React.memo is a higher-order component that you wrap around a functional component to prevent unnecessary re-renders.
                </li>
                <li>
                    It remembers (memoizes) the rendered output of a component and skips re-rendering it if the props haven’t changed.
                </li>
            </ul>
            <b>Syntax :</b>
            <pre><code>{`const MyComponent = React.memo((props) => {
  // component logic
});
`}</code></pre>
            <strong><a href="https://codesandbox.io/p/sandbox/xpycgz?file=%2Fsrc%2FReactMemo.js" target="blank">Click here for REFERENCE</a></strong>
            <ul>
                <li>Every time Parent re-renders, React normally re-renders Child too.
                </li>
                <li>
                    But with React.memo, Child only re-renders if its value prop changes.
                </li>
                <li>
                    So "Child rendered" is not logged again when count changes.
                </li>
            </ul>
            <table border="1" cellpadding="8" cellspacing="0">
                <thead>
                    <tr>
                        <th>Hook / Function</th>
                        <th>Type</th>
                        <th>Purpose</th>
                        <th>Returns</th>
                        <th>Common Use Case</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>useMemo</code></td>
                        <td>Hook</td>
                        <td>Memoizes a <strong>computed value</strong> to avoid expensive recalculations</td>
                        <td>A memoized <strong>value</strong></td>
                        <td>Expensive calculations inside components</td>
                    </tr>
                    <tr>
                        <td><code>useCallback</code></td>
                        <td>Hook</td>
                        <td>Memoizes a <strong>function</strong> to avoid recreating it on each render</td>
                        <td>A memoized <strong>function</strong></td>
                        <td>Pass stable function references to child components (especially with <code>React.memo</code>)</td>
                    </tr>
                    <tr>
                        <td><code>React.memo</code></td>
                        <td>Higher-order component</td>
                        <td>Prevents re-render of a <strong>functional component</strong> if its props haven’t changed</td>
                        <td>A <strong>memoized component</strong></td>
                        <td>Optimize rendering of pure functional components with stable props</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </>)
}

export default ReactMemo;