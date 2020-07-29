const express = require('express')
const app = express()

// listen server
app.listen(3000)

// use EJS for template engine
app.set('view engine', 'ejs');

// get method
app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname })
    const blogs = [
        {
            "title": "non, sollicitudin a, malesuada id,",
            "description": "enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis"
        },
        {
            "title": "orci. Phasellus dapibus quam quis",
            "description": "dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam"
        },
        {
            "title": "nibh. Phasellus nulla. Integer vulputate,",
            "description": "dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio"
        },
        {
            "title": "tristique pellentesque, tellus sem mollis",
            "description": "nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,"
        },
        {
            "title": "nec metus facilisis lorem tristique",
            "description": "risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a,"
        }
    ]

    res.render('index', { title: 'Home', blogs })
})

app.get('/blog/create', (req, res) => {
    res.render('create', { title: 'create blog' })
})

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' })
})

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// 404 page should be place at the bottom of routing
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: '404' })
})

// register styles
app.use(express.static('assets'))