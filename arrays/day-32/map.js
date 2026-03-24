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

// push 6 object into array 
posts.push(
    post, 
        {
            id: "2",
            likes: 25,
            username: "asifhassam14",
            timestamp: "16:45",
            comments: []
        },
        {
            id: "3",
            likes: 51,
            username: "zaio",
            timestamp: "17:45",
            comments: []
        },
        {
            id: "4",
            likes: 100,
            username: "imharjotsingh",
            timestamp: "18:45",
            comments: []
        },
        {
            id: "5",
            likes: 12,
            username: "modaymotivation",
            timestamp: "18:45",
            comments: []
        },
);

// pop the last element from this array 
posts.pop();

// iterate over the elements - forEach 
const postsWithShares = posts.map( (item, index) => {
    return {...item, shares: 0};
}).forEach((item, index) => {
    console.log(`
    ${item.username}  | ${item.timestamp}
    IMAGE
    ${item.likes} likes | ${item.comments.length} comments | 10 ${item.shares}
`)
})

