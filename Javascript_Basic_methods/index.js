// Spread Operator -  Purpose: Expands elements of an array or object.

// When to use:
// Passing elements to functions
// Copying or merging arrays/objects
const arr1 = [1,2,3];
const arr2=[...arr1,4,5];
console.log("Spread Operator",arr2);

// ****************************************************************** 

// Rest Operator Purpose: Collects multiple elements into a single array or object.

// When to use
// Defining functions with variable arguments
// Destructuring arrays/objects

const print =(...num)=>{
    num.map((nValue)=>{
        console.log("Rest Operator",nValue)
    })
}
print(1,5,9)

// ****************************************************************** 