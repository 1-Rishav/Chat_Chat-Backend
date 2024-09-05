const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "Name Required"]
    },
    email:{
        type:String,
        required:[true, "Email Required"]
    },
    password:{
        type:String,
        required:[true, "Password Required"]
    },
    profile_pic:{
        type:String,
        default:""
    }
},{timestamps:true})

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;