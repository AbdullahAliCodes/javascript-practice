// Button and click event for Input 1
const btnOne = document.querySelector("#btn1");
btnOne.addEventListener("click",() => setFocus("input1"));

// Button and click event for Input 2
const btnTwo = document.querySelector("#btn2");
btnTwo.addEventListener("click",() => setFocus("input2"));

// Button and click event for Input 3
const btnThree = document.querySelector("#btn3");
btnThree.addEventListener("click",() => setFocus("input3"));

// setFocus funtion
function setFocus(elementId) {

    // Target element
    const targetElement = document.getElementById(elementId);

    // If else statement
    if (targetElement) {
        // Apply focus() method
        targetElement.focus();

    } else {
        // Log an error message
        console.log("Element not found");

    }
}
