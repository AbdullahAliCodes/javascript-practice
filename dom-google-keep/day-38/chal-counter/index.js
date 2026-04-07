// Select the button element
const clickButton = document.querySelector("#clickButton");

// Initialize a counter
const counter = document.querySelector("#counter");

// Select the counter element
let clickCount = 0;

// Event listener 
clickButton.addEventListener("click", function() {
    
    // Increment the counter
    clickCount+=1;
    console.log(clickCount);

    // Update the text content
    counter.textContent = clickCount;

});