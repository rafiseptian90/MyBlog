const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema collection
const blogsSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
}, { timestamp: true })

// store model
const Blog = mongoose.model('blogs', blogsSchema)

module.exports = Blog
