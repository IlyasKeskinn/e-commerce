const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");


//create user schema
const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userRole: { type: String, default: "user", enum: ["user", "admin"] },
    avatar: { type: String }
})

userSchema.methods.createAuthToken = function () {
    //TODO secret keys env
    return jwt.sign({_id : this._id, _userRole : this.userRole, email : this.email} ,"secretKeys")
}

//define model 
const User = mongoose.model("Users", userSchema);

//validate users 

function validateUser(user) {
    const schema = Joi.object({
        userName: Joi.string().required().min(2).max(50),
        email: Joi.string().required().min(2).max(50).email(),
        password: Joi.string().required().min(2).max(100),
        userRole: Joi.string(),
        avatar: Joi.string(),
    })
    return schema.validate(user);
}



module.exports = {User , validateUser}