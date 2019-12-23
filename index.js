const express = require('express')
const searchRoutes  = require('./routes/line')

const app = express()

// app.use('/',phone)
app.use('/pincodeSearch',searchRoutes)

app.listen(5000, ()=> {
    console.log('Server is up and running')
})