const mongoose = require('mongoose');
const { Schema } = mongoose;

// this schema will be used in routes
const UserSchema = new Schema({  //data required for logging in
    name:{
        type: String,       
        required: true          //compulsory to add
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    }, 
});

const User = mongoose.model('user', UserSchema);
module.exports = User