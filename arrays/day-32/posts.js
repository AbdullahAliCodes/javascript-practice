// iterate over all posts - use template literals & log 

const post = {
    id: "1",
    likes: 20,
    username: "akhilboddu",
    timestamp: "15:45",
    comments: []
};

const posts = [
    {
        id: "0",
        likes: 20,
        username: "akhilboddu",
        timestamp: "15:45",
        comments: [
            {
                username: "akhilboddu",
                comment: "Nice picture",
                id: "xhabjjdsASDddsa",
            },
        ],
    },
];

// push an object into array 
posts.push(
    post, 
        {
            id: "2",
            likes: 0,
            username: "uncledullaz",
            timestamp: "16:45",
            comments: []
        },
);

// pop the last element from this array 
posts.pop();















// iterate over the elements - forEach 
    posts.forEach(post => {
        console.log(
        `${post.username}
        ${post.timestamp} 
        ${post.likes} 
            username  | timestamp
            IMAGE
            numOflikes | numOfcomments
        `
        )
    })
