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

    console.log(req.body)

    const newPost = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost)
    
    return res.status(201).json(posts)
}

function update(req, res) {
    const postSlug = req.params.slug

    const post = posts.find(post => post.slug === postSlug)

    if (!post) {
        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        })
    }

    post.title = req.body.title
    post.slug = req.body.slug
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags

    return res.json(posts)
}

function modify(req, res) {
    const postSlug = req.params.slug

    const post = posts.find(post => post.slug === postSlug)

    if (!post) {
        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        })
    }

    post.title = req.body.title?req.body.title:post.title
    post.slug = req.body.slug?req.body.slug:post.slug
    post.content = req.body.content?req.body.content:post.content
    post.image = req.body.image?req.body.image:post.image
    post.tags = req.body.tags?req.body.tags:post.tags

    return res.json(posts)
}

function destroy(req, res) {

    const postSlug = req.params.slug

    const post = posts.find(post => post.slug === postSlug)

    let postsFiltered = posts

    if (!post) {

        return res.status(404).json({
            error: '404 not found',
            message: 'Post not found'
        })
    } 

    postsFiltered.splice(post, 1)

    console.log(postsFiltered);

    res.status(204).json(postsFiltered)

    // res.send(postsFiltered)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}