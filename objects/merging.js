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
const newUserWSpread = { ...profile, ...signedUpUser};

// rest operator { ... }
function sum(a, b, ...nums) {
    console.log(a, b, nums)
};

sum(22, 44, 99, 33, 66, 88);

// Merging using Object.assign()
const newUser = Object.assign({},profile, signedUpUser);
newUser.password = "betterPassword123"
















// console.log("combinedObject", newUser);
// console.log("combinedObject", newUserWSpread);
// console.log("emptyProfileObject", profile)
// console.log("signUpObject", signedUpUser)