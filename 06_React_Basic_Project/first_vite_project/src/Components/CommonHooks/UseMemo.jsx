const UseMemo = () => {
    return (<>

        <div className="content">
            <ul>
                <li>
                    useMemo is a React Hook that memorizes the result of a function so that it doesn’t get recalculated unless needed.

                </li>
                <li>
                    It’s used to optimize performance by avoiding expensive calculations on every render.
                </li>
            </ul>
            <div>
                <b>Syntax : </b>
                <pre><code>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
`}</code></pre>
            </div>
            <ul>
                <li>
                    computeExpensiveValue(a, b) is the function you're memoizing.
                </li>
                <li>
                    [a, b] is the dependency array – the function only re-runs if a or b changes.
                </li>
            </ul>
            <div>
                <strong><a href="https://codesandbox.io/p/sandbox/usememo-jdhtns?file=%2Fsrc%2FUsememo.js%3A16%2C9-16%2C16" target="blank">Click here for REFERENCE</a></strong>
                <br />
                <br />
                From the above reference code
                <br />
                ⚙️ Without useMemo
                <br />
                The slowFunction runs on every render, even when you just toggle the theme.
                <br />
                <br />

                ✅ With useMemo
                <br />
                slowFunction only runs when count changes, saving unnecessary work
            </div>
        </div>
    </>)
}


export default UseMemo;