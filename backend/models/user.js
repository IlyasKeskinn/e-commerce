const mongoose = require("mongoose");
const Joi = require("joi");

//create user schema
const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userRole: { type: String, default: "user", enum: ["user", "admin"] },
    avatar: { type: String }
})

//define model 
const User = mongoose.model("Users", userSchema);

//validate users 

function validateUser(user) {
    const schema = Joi.object({
        firstName: Joi.string().required().min(2).max(50),
        lastName: Joi.string().required().min(2).max(50),
        userName: Joi.string().required().min(2).max(50),
        email: Joi.string().required().min(2).max(50).email(),
        password: Joi.string().required().min(2).max(100),
        userRole: Joi.string(),
        avatar: Joi.string(),
    })
    return schema.validate(user);
}

module.exports = {User , validateUser}