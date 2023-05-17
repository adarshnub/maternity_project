const mongoose = require('mongoose');

const {Schema, model} = mongoose;


const UserSchema = new Schema({
    firstName: {type: String, required: true, min: 4, unique:true},
    lastName: {type: String, required: true, min: 4, unique:true},
    email: {type: String, required: true, unique: true},
    phone: {type: String , required: true, unique: true},
    date: {type: Date , required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true},

});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
