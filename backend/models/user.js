const mongoose = require('mongoose');
const validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter a name"],
        maxlength: [30, "Your name cannot exceed 30 characters"]
    },

    email:{
        type: String,
        required : [true, "Please enter a email address"],
        unique: true,
        validate: [validator.validate(isEmail), "Please enter a valid email address"],
    },

    password:{
        type: String,
        required : [true, "Please enter a password"],
        minlength: [8, "Your password must be at least 8 characters"],


    }
});

module.exports = mongoose.model('User', userSchema);