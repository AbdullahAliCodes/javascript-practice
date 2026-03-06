let users = {};

// 1. CREATE:
users["user1"] = { 
    name: "Alice",
    // Method (Function in an object)
    sayHello: function() {
        console.log("Hi, my name is " + this.name);
    }
};
users["user2"] = { name: "Bob" };

// 2. READ: 
let grabbedUser = users["user1"];

// 3. UPDATE: 
users["user1"].name = "Alicia";

// 4. DELETE:
delete users["user2"];

// 5. CALL THE METHOD
users["user1"].sayHello(); // Output: "Hi, my name is Alicia"












