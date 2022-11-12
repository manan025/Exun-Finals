const express = require('express')
const Project = require('../models/projects')


//global vars
const router = express.Router()


//routes
router.get('/', (req, res) => {
    res.send('Projects')
})



module.exports = router