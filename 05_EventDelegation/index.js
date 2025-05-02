const addBoxButton = document.querySelector("[data-add-box]");
const grid = document.querySelector(".grid");
const boxes = document.querySelectorAll(".box");

// This code is for Onclick of the Add Box button an new box is added 
addBoxButton.addEventListener("click",()=>{
    const box = document.createElement("div");
    box.classList.add("box");
    grid.append(box)
})

// This code is for highlight the box clicked, here we have one issue, at initial rendering we have three boxes so this EvenListener is assigned only those three boxes.
// If new box is created after that add box button click, that particular boxes will not have this event listener, so those boxes can't be highlited.

// *************** Comment this code for this fix ***************
// boxes.forEach(box =>{
//     box.addEventListener("click",()=>{
//         box.classList.toggle("clicked")
//         })
// })

// Solution : Instead of adding eventListener to boxes, we can add it for whole document.

document.addEventListener("click",(e)=>{
    if(e.target.matches(".box")){
        e.target.classList.toggle("clicked");
    }
})

// Tip : Instead of using document, if we need to add for a particular div, use css selectors.
// Comment the above code and run this, if a box is outside the grid, then it will not be highlited. 

// grid.addEventListener("click",(e)=>{
//     if(e.target.matches(".box")){
//         e.target.classList.toggle("clicked");
//     }
// })