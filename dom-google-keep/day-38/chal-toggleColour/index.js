// Select the button
const toggleButton = document.querySelector("#toggleButton");

// Event listener
toggleButton.addEventListener("click", function () {

    // Current background color of the body
    const currentColor = window.getComputedStyle(document.body).backgroundColor;
    let newColor;

    // Toggle between red and green
    if(currentColor == "rgb(255, 0, 0)") {
        newColor = "rgb(0, 255, 0)";
    }
    else {
        newColor = "rgb(255, 0, 0)";
    }

    // New background color
    document.body.style.backgroundColor = newColor;

});
