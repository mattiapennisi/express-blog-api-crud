const posts = require('../data/posts.js')

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

function modify(req, res) {
    res.send(`Edit part of a post`);
}

function destroy(req, res) {
    postId = req.params.id - 1

    posts.splice(postId, 1)

    console.log(posts);
    
    res.status(204).json({
        message: 'Post deleted' 
    })
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}