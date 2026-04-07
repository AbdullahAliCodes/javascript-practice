// JavaScript Code 

// 1. Create users array: 
let users = [
    {id: 1, name: "John Doe", age: 28},
    {id: 2, name: "Jane Smith", age: 35},
    {id: 3, name: "Bob Johnson", age: 42}
]

// 2. Function to generate user cards:
function generateUserCards(user) {
    return(
        `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p>Age: ${user.age}</p>
        </div>
        `
    )
}

// 3. Function to update the user list:
function updateUserList() {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = users.map( (user) => {
        return generateUserCards(user)
    }).join("");
}

// 4. Initial update:
updateUserList();

