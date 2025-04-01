

// Paste this code in console and hit enter, after that proceed the flow. You will get the Missed elements in console. 

new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        // Log added nodes
        mutation.addedNodes.forEach(node => {
            console.log("Added:", node.nodeName, node.outerHTML || node.textContent);
        });

        // Log removed nodes
        mutation.removedNodes.forEach(node => {
            console.log("Removed:", node.nodeName, node.outerHTML || node.textContent);
        });
    });
}).observe(document.body, { childList: true, subtree: true });


// ✔ Logs all added and removed elements, not just <span> elements.
// ✔ Uses outerHTML to capture full structure (including attributes & children).
// ✔ Handles both text and elements dynamically.
// ✔ Works for all changes across the DOM (subtree: true).