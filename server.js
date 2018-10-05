const environment = process.env.NODE_ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');

const portOptions = {development: 8000,test : 6000}
const defaultPort = portOptions[environment];
const PORT = process.env.PORT || defaultPort;
const knex = require('./db/knex');
let path = require('path');
const users = require('./routes/users');


const methodOverride = require('method-override');

let app = express();

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(users);
let assassins = require('./routes/routesassassins');
app.use(assassins);

let contracts = require('./routes/routescontracts');
app.use(contracts);

app.use('/index',(req,res,next)=>{
    res.render('index');
})
app.use(express.static('comps'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
// app.use((req,res)=>{
//     res.send('HELLO');
// })
app.listen(PORT,()=>{
    console.log('HERE I AM !!');
})

module.exports = app;