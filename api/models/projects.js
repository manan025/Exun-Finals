const mongoose = require('mongoose')


let projectSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    admin: {type: String, required: true},
    member: {type: Array, required: true, default: []},
})

module.exports = mongoose.model('project', projectSchema)