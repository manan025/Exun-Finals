const express = require('express')


//global vars
const router = express.Router()


//routes
router.get('/', (req, res) => {
    res.send('<Route Name>')
})



module.exports = router