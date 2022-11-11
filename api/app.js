const express = require('express');
const cors = require('cors');


//? routes
const ipfs = require('./routes/ipfs');

//? global vars
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/ipfs', ipfs)



app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port 8000')
})