const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (mail) => validator.isEmail(mail),
        },
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
    },
});

module.exports = mongoose.model('user', userSchema);
