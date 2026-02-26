const profile = {
    username: "",
    password: "",
    email: "",
    posts: "",
    followers: "",
    following: "",
    picture: "",
    fullName: "",
    bio: "",
    link: "",
    info() {

    },
    posted() {

    }
};

const signedUpUser = {
    username: "uncledullaz",
    email: "uncledullaz@gmail.com",
    password: "whyWouldWeStoreThis69$"
};


// spread operator { ... }

const newUserWSpread = { ...profile, ...signedUpUser}; // "js please spread all the properties inside of profile"

const newUser = Object.assign({},profile, signedUpUser);
newUser.password = "betterPassword123"

// console.log("combinedObject", newUser);
// console.log("combinedObject", newUserWSpread);
// console.log("emptyProfileObject", profile)
// console.log("signUpObject", signedUpUser)


// rest operator { ... }

function sum(a, b, ...nums) { // ...nums is the "rest" of the parameters
    // sum all the parameters
    console.log(a, b, nums)
};

sum(22, 44, 99, 33, 66, 88);