const express = require('express')
// const bodyParser = require('body-parser')
const Events  = require('./routes/pin')


const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/',phone)
app.use('/',Events)

app.listen(5000, ()=> {
    console.log('Server is up and running')
})