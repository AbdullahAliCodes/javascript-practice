// JavaScript Code

// 1. Wait for the DOM to load:
document.addEventListener("DOMContentLoaded", () => {
    // 2. Select all elements with class 'highlight-button':
    const highlightButtons = document.querySelectorAll(".highlight-button");

    // 3. Add click event listener to each 'highlight-button':
    highlightButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // a. Remove "active" class from all list items to reset highlighting:
            const allListItems = document.querySelectorAll(".navigation li")
            allListItems.forEach((li) => {
                li.classList.remove("active");
            })
            // b. Add "active" class to the closest list item for highlighting:
            const closestListItem = btn.closest("li");
            closestListItem.classList.add("active");
        })
    })
});