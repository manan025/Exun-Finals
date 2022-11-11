const express = require('express')
const ipfsClient = require('ipfs-http-client')


//global vars
const router = express.Router()
const ipfs = ipfsClient(process.env.PORT|| 'http://localhost:8000')


//routes
router.get('/', (req, res) => {
    res.send('IPFS')
})


router.post('/upload', async(req, res) => {
    const data = {path: req.body.path, content: Buffer.from(req.body.content)}
    const file = await ipfs.add(data)
    return res.send(`https://gateway.ipfs.io/ipfs/${file[0].hash}`)
})


module.exports = router