// Select Input Field 
const inputField = document.getElementById("textInput");

// Select Display Button 
const displayButton = document.getElementById("displayButton");

// Select Display Text Container 
const displayTextContainer = document.getElementById("displayTextContainer");

// Modify Event Listener 
displayButton.addEventListener("click", function () {

    // Retrieve the text from the input field
    const enteredText = inputField.value;

    // Apply styles to the text display container
    displayTextContainer.textContent = enteredText;
    displayTextContainer.style.color = "rgb(51, 51, 51)";

});

