// JavaScript Code:

// 1. Define two variables: 
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

// 2. Implement a function named 'addTask':
// console.log(trimmed);
function addTask() {
    const trimmed = taskInput.value.trim();
    if (trimmed) {
        
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> ${trimmed}`;

        taskList.appendChild(li);

        taskInput.value = "";
    }
}

// 3. Add an event listener to the input field
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})
