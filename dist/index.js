"use strict";
//------------
// interfaces
//------------
const authorOne = {
    name: "Mario",
    avatar: "/img/mario.png",
};
const newPost = {
    title: "My first post",
    body: "something interesting",
    tags: ["gamming", "tech"],
    createdAt: new Date(),
    author: authorOne,
};
//---------------------------
// as funtion argument types
//---------------------------
function createPost(post) {
    console.log(`Created post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//-------------
// with arrays
//-------------
let posts = [];
posts.push(newPost);
