const users = [
    { id: 1, name: "Ali" }, 
    { id: 2, name: "Sam" }
];
const user = users.find(
    u => u.id === 2
);
console.log(user); 
// { id: 2, name: "Sam" }