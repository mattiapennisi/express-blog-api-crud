const posts = require('../data/posts.js')

function index(req, res) {

    let postsToFilter = posts

    if (req.query.tags) {
        console.log('Posts filtered');
        
        postsToFilter = posts.filter(post => post.tags.includes(req.query.tags))
    }

    res.json(postsToFilter);
}

function show(req, res) {

    const postSlug = req.params.slug

    const post = posts.find(post => post.slug === postSlug)

    console.log(post);

    if (!post) {
        return res.status(404).json({
            error: '404 not found',
            message: 'Post not found'
        })
    }

    res.json(post)
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
    postSlug = req.params.slug - 1

    posts.splice(postSlug, 1)

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