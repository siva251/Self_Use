const Javascript = () => {
    return (<>
        <div className="content">
            <b>1 - What are the different data types in JavaScript?</b>
            <ul>
                <li>Primitive types: String, Number, Boolean, Null, Undefined, Symbol, BigInt</li>
                <li>Non-primitive (Reference types): Object, Array, Function, Date, etc.</li>
            </ul>
            <br />
            <b>2 - What is the difference between var, let, and const?</b>
            <table border="1" cellpadding="8" cellspacing="0">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>var</th>
                        <th>let</th>
                        <th>Const</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Scope</td>
                        <td>Function scope</td>
                        <td>Block scope</td>
                        <td>Block scope</td>
                    </tr>
                    <tr>
                        <td>Redeclaration</td>
                        <td>Allowed</td>
                        <td>Not allowed</td>
                        <td>Not allowed</td>
                    </tr>
                    <tr>
                        <td>Reassignment</td>
                        <td>Allowed</td>
                        <td>Allowed</td>
                        <td>Not allowed</td>
                    </tr>
                    <tr>
                        <td>Reassignment</td>
                        <td>Yes (initialized as undefined)</td>
                        <td>Yes (but not initialized)</td>
                        <td>Yes (but not initialized)</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <b>3 - What is hoisting in JavaScript?</b>
            <div>Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.</div>
            <br/>
            <b>4 - What is closures in Javascript ?</b>
            <div>A closure gives you access to an outer function’s variables from an inner function even after the outer function has finished executing.
                <pre>
                <code>
                    {`function outer() {
  let count = 0; // 'count' is a local variable inside outer

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // outer() returns inner function

counter(); // 1
counter(); // 2
counter(); // 3
`}
                </code>
                </pre>
            </div>
            <br></br>
            <b>5 - What is the Event Loop in JavaScript?</b>
            <div>
                The event loop is a core part of JavaScript's concurrency model. It enables non-blocking, asynchronous behavior, even though JavaScript is single-threaded.
                <ul>
                    <li>Call Stack</li>
                    <li>Web APIs (browser provided)</li>
                    <li>Callback / Task Queue</li>
                    <li>Microtask Queue</li>
                    <li>Event Loop</li>
                </ul>
                How it works: <br/>
1 - JS runs synchronous code in the call stack.<br/>
2 - Async tasks (e.g. setTimeout, fetch) are handed off to Web APIs.<br/>
3 - Once they finish, their callback goes to the Task Queue or Microtask Queue.<br/>
4 - The Event Loop checks if the call stack is empty.<br/>
5 - If it is, the event loop:<br/>
First executes all microtasks (like .then() from Promises).<br/>
Then picks the next task from the task queue and puts it on the call stack.<br/><br/>
<div>
    <prep>
        <code>{`
console.log('Start');
`}</code><br/>
        <code>{`
setTimeout(() => {
  console.log('Timeout');
}, 0);
`}</code><br/>
        <code>{`
Promise.resolve().then(() => {
  console.log('Promise');
});
`}</code><br/>
        <code>{`
console.log('End');
`}</code>

</prep>
</div>
<b>Output :</b> <br/>
Start<br/>
End<br/>
Promise<br/>
Timeout<br/>

Start and End are synchronous → executed first.<br/>
Promise.then() is a microtask → executed after the stack clears.<br/>
setTimeout(..., 0) is a task → executed after microtasks.<br/>
            </div>
<b>6 - What is a promise in JavaScript?</b>
<div>A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</div>

        </div>
    </>)
}

export default Javascript;