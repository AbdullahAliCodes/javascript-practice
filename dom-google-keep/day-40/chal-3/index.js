// JavaScript Code 

// 01. Set DOMContentLoaded Event:
document.addEventListener("DOMContentLoaded", function() {
    // 02. Get HTML Elements:
    const subscriptionForm = document.getElementById("subscriptionForm");
    const email = document.getElementById("email");
    const hoverMessage = document.getElementById("hoverMessage");

    // 03. Create Submit Event Listener:
    subscriptionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const userEmail = email.value;
        hoverMessage.textContent = `Thanks for subscribing, ${userEmail}!`
        hoverMessage.style.backgroundColor = "rgb(76, 175, 80)";
        hoverMessage.style.display = "block"
    });

    // 04. Mouseover Event Listener:
    hoverMessage.addEventListener("mouseover", () => {
        hoverMessage.style.backgroundColor = "rgb(221, 221, 221)";
    })

    // 05. Mouseout Event Listener:
    hoverMessage.addEventListener("mouseout", () => {
        hoverMessage.style.backgroundColor = "rgb(240, 240, 240)";
    })

    // 06. Reset Event Listener:
    subscriptionForm.addEventListener("reset", () => {
        hoverMessage.style.display = "none";
    })
})





