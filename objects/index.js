// Instagram Profile & Posts Objects 

const profile = {
    username: "akhilboddu",
    posts: 55,
    followers: 800,
    following: 800,
    picture: "link",
    fullName: "Akhil Boddu",
    bio: "Some information",
    link: "zaio.com",
    info() {
        return `
            Info for: ${this.username}
            Posts: ${this.posts}
            Followers: ${this.followers}
            Following: ${this.following}
            Bio: ${this.bio}
            Link: ${this.link}
        `
    }
}

console.log(profile.info())

// get data 
// console.log(profile.username, profile['posts'])

// modify 
// profile.posts = profile.posts + 1;
// console.log(profile.posts);

// create a new key
// profile.email = "dullz.mufc@gmail.com";
// profile.phoneNumber = "0713481122"

// delete profile.phoneNumber

// console.log(profile)
