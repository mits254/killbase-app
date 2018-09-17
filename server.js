const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const knex = require('./db/knex');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));

app.use((req,res)=>{
    res.send('HELLO');
})
app.listen(PORT,()=>{
    console.log('HERE I AM !!');
})

module.exports = app;