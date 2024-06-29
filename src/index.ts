//------------
// interfaces
//------------

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: "Mario",
  avatar: "/img/mario.png",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  createdAt: Date;
  author: Author;
}

const newPost: Post = {
  title: "My first post",
  body: "something interesting",
  tags: ["gamming", "tech"],
  createdAt: new Date(),
  author: authorOne,
};

//---------------------------
// as funtion argument types
//---------------------------

function createPost(post: Post): void {
  console.log(`Created post: ${post.title} by ${post.author.name}`);
}

createPost(newPost);

//-------------
// with arrays
//-------------

let posts: Post[] = [];

posts.push(newPost);
