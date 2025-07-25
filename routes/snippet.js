const express = require('express');
const snippet = require('./seedData.json');
const bcrypt = require('bcrypt')
const app = express();

let id = snippet.length + 1;
const password = 'pswrd123';
const saltRounds = 8;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error('Error hashing password:', err);
    } else {
        console.log('Hashed password:', hash);
    }
});
// GET ALL SNIPPETS
app.get('/', (req, res) => {
    res.json(snippet);
});
// CREATE A SNIPPET
app.post('/snippets', (req, res) => {
    const newSnippet = {
        id: snippet.length + 1,
        title: req.body.title,
        content: req.body.content,
    }
    snippet.push(newSnippet);
    res.status(201).json(newSnippet);
});


app.get('/snippets/:id', (req, res) => {
    const foundSnippet = snippet.find(i => i.id === parseInt(req.params.id));
    if(!foundSnippet) {
        return res.status(404).send('Snippet not found');
    }
    res.json(foundSnippet);
})

module.exports = app;