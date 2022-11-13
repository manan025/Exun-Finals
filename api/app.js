const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()


//? routes
// const ipfs = require('./routes/ipfs');
// const blockchain = require('./routes/blockchain');
const auth = require('./routes/auth');
const projects = require('./routes/projects');
const mail = require('./routes/mail');


//? global vars
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// app.use('/ipfs', ipfs)
// app.use('/blockchain', blockchain)
app.use('/auth', auth)
app.use('/project', projects)
app.use('/mail', mail)



app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port 8000')
})