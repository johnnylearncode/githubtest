const express = require('express');
const morgan = require('morgan');
const path = require('path');




const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!')
})


// load routers
// app.use('/', require('./server/users/users.router'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})