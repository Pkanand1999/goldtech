const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "username is required"],
    },
    name: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    email: {
        type: String,
        minlength: [6, "password must be at least 6 characters"],
        required:true
    },
    gender:{
        type: String,
    },
    status:{
        type: String,
    },
}, {
    timestamps: true
    });


const User = mongoose.model('User', UserSchema);
module.exports = User;