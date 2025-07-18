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

app.get('/snippets', (req, res) => {
    const snippets = snippet.getAllSnippets();
    res.json(snippets);
})

app.post('/snippets', (req, res) => {
    const snippet = snippet.createSnippet();
    res.status.json(snippet);
})
app.get('/snippets/3', (req, res) => {
    const snippet = snippet.find(i => i.id === 3(req.params.id));
    if(!snippet) {
        return res.status(404).send('Snippet not found');
        res.json(snippet);
    }
})
app.listen(3000, () => {
    console.log(`Snippet running at http://localhost:${3000}`);
});