var mongoose = require('mongoose');
const baseSchema = require("./base.models")

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phone: String,
});

userSchema.add(baseSchema);

var user = new mongoose.model('User', userSchema);
module.exports = user;