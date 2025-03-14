// Server and routes variables
const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts.js')

// It listens for the port in order to set the server
app.listen(port, () => {
    console.log('Server is running');
})

// Index route
app.get('/', (req, res) => {
    res.send('Server index')
})

// It sets the routes from module imported
app.use('/posts', postsRouter)