const mongoose = require('mongoose')


let userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('users', userSchema)