const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updatedebounceText = debounce((text)=>{
    debounceText.textContent=text // callback function
},
800 // Time delay 
)

const updateThrottleText = throttle((text)=>{
    throttleText.textContent = text
})

input.addEventListener("input", e=>{
    let value = e.target.value
    defaultText.textContent = value;
    updatedebounceText(value)
    updateThrottleText(value)
})

function debounce (callback, delay=1000){
    let timeout               // Stores a reference to the setTimeout timer
    return(...args) =>{
        clearTimeout(timeout) // Clear the previous timer (if any)
        timeout = setTimeout(()=>{
            callback(...args) // Call the original function after the delay
        },delay)
    }
}

function throttle(callback, delay = 1000) {
    // This flag tells us whether we are currently in the waiting period
    let shouldWait = false;
    // Stores the most recent arguments while we’re waiting
    let waitingArguments;
    // A helper function to handle delayed calls
    const timeOutFunc = () => {
        // If no new arguments were passed during the wait, allow next call immediately
        if (waitingArguments == null) {
            shouldWait = false;
        } else {
            // Otherwise, call the function with latest arguments
            callback(...waitingArguments);
            // Clear the stored arguments
            waitingArguments = null;
            // Wait again for the specified delay
            setTimeout(timeOutFunc, delay);
        }
    };

    // This is the throttled function that gets returned
    return (...args) => {
        // If we are waiting, store the latest arguments and exit
        if (shouldWait) {
            waitingArguments = args;
            return;
        }
        // If not waiting, immediately call the function
        callback(...args);
        // Set the flag to start waiting
        shouldWait = true;
        // Start the timer and prepare to handle any new arguments after delay
        setTimeout(timeOutFunc, delay);
    };
}

