const posts = require('../routers/posts.js')

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const postId = req.params.id - 1
    res.json(posts[postId]);
}

function store(req, res) {
    res.send(`Store a new post`);
}

function update(req, res) {
    res.send(`Edit a post`);
}

function modify (req, res) {
    res.send(`Edit part of a post`);
}

function destroy (req, res) {
    res.send(`Delete a post`);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}