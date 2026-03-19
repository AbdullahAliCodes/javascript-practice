// iterate over all posts - use template literals & log 

const post = {
    id: "1",
    likes: 20,
    username: "uncledullaz",
    timestamp: "15:45",
    comments: []
};

const posts = [
    {
        id: "0",
        likes: 20,
        username: "uncledullaz",
        timestamp: "15:45",
        comments: [
            {
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
            likes: 0,
            username: "c.ronaldo",
            timestamp: "16:45",
            comments: []
        },
        {
            id: "3",
            likes: 0,
            username: "apple",
            timestamp: "17:45",
            comments: []
        },
        {
            id: "4",
            likes: 0,
            username: "man-united",
            timestamp: "18:45",
            comments: []
        },
        {
            id: "5",
            likes: 0,
            username: "modaymotivation",
            timestamp: "18:45",
            comments: []
        },
);

// pop the last element from this array 
posts.pop();


posts.map((item, index) => {
    return {...item, shares: 0};
}).forEach((item, index) => {
    console.log(`
    ${item.username}  |  ${item.timestamp}
    IMAGE
    ${item.likes} likes  |  ${item.comments.length} 
    comments  |  ${item.shares} shares`)
})
