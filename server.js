// import modules

import express from 'express'
import * as catDb from './data/cat-db.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes
app.get('/', function(req, res) {
    res.send('<h1>hello, friend</h1>')
  })

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get("/cats", function(req, res) {
    catDb.find({}, function(error, cats) {
        res.render("cats/index", {
            cats: cats,
            error: error
        })
    })
})


// Tell the app to listen on port 3000

app.listen(3001, function() {
  console.log('Listening on port 3001')
})
