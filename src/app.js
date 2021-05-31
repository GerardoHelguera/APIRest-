 const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index.js');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
mongoose.connect('mongodb+srv://Helguera:e2vNcDJlVbQi672G@cluster0.ukknt.mongodb.net/IOT_Proyecto?retryWrites=true&w=majority')
.then(db => console.log('Conectado')).catch(err => console.log(err));

app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes);



app.listen(app.get('port'), () =>{
    console.log('servidor funcionando en el puerto', app.get('port'))
});