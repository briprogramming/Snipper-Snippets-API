const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let snippets = [
    {
    id: 1,
    language: "JavaScript",
    code: "console.log('Hello, World!');",

    }
]
let nextId = 2;


app.listen(3000, () => {
    console.log(`Snippet running at http://localhost:${3000}`);
});