const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/contactos')
  .then(db => console.log('conexion'))
  .catch(err => console.log(err));

const rutas = require('./rutas');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

app.use('/', rutas);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});