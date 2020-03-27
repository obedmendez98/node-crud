const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contactos = Schema({
    firstname:String,
    lastname:String,
    phone:String,
    email:String
});

module.exports = mongoose.model('contactos', Contactos);