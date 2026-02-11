const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    email: {type:String, unique: true},
    mobile: String,
    password: String
});

mongoose.model("UserInfo", userSchema);