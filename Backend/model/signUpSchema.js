const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const signupSchema = new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
})
const signup = mongoose.model('signup',signupSchema)
module.exports = signup