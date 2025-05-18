const UseTransition = () => {
    return (<>
        <div className="content">
            useTransition is a React Hook that helps you manage low-priority updates in your app without blocking high-priority interactions, like typing or clicking
            <ul>
                <li>
                    It allows you to tell React: “This update might take some time — don’t let it slow down the UI!”
                </li>
                <li>
                    Normally, expensive updates (like rendering thousands of DOM elements) can freeze the UI and make it feel laggy.
                </li>
                <li>
                    With useTransition, React prioritizes urgent state updates (like input text) over deferred updates (like filtering or list rendering), leading to smoother user experience.
                </li>
            </ul>
            <strong>Syntax :</strong>
            <pre>
                <code>{`const [isPending, startTransition] = useTransition();`}</code>
            </pre>
            <ul>
                <li>
                    isPending: Boolean that tells if a transition is still ongoing.
                </li>
                <li>
                    startTransition(callback): Wraps a low-priority update.
                </li>
            </ul>
            <strong><a href="https://codesandbox.io/p/sandbox/usetransition-w2628p?file=%2Fsrc%2FUseTransition.js%3A30%2C8" target="blank">Click here for REFERENCE</a></strong>
        </div>
    </>)
}

export default UseTransition;