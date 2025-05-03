// A closure in JavaScript is a feature where an inner function has access to the variables of its outer function, even after the outer function has finished executing.

function outer() {
    let count = 0;
    
    return function inner() {
      count++;
      console.log(count);
    }
  }
  
  const counter = outer();  // 'outer' returns 'inner', and 'counter' holds it
  counter(); // 1
  counter(); // 2
  counter(); // 3