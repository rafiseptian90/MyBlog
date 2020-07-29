 // import http module
 const http = require('http')
 // import filesystem module
 const fs = require('fs')
 // lodash
 const _ = require('lodash')

 // create server
 const server = http.createServer((req, res) => {
     // receive request
     // console.log(`url: ${req.url} || method: ${req.method}`)

     // send response
     res.setHeader('Content-Type', 'text/html')

     // basic routing

     let path = `${__dirname}/views/`

     switch(req.url){
         case '/about':
             path += 'about.html'
             res.statusCode = 200
             break;
         case '/about-us':
             // redirect
             res.setHeader('Location', '/about')
             res.statusCode = 301
             break;
         case '/':
             path += 'index.html'
             res.statusCode = 200
             break;
         default: path += '404.html'
                    res.statusCode = 404
     }

     fs.readFile(path, (err, data) => {
         if(err){
             console.log(err)
             res.end()
         }

         res.end(data)
     })
 })

 // listen for request
 server.listen(3000, 'localhost', () => {
     console.log('listening for request')
 })