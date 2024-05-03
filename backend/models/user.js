const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const addressSchema = mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: Number, required: true },
})

//create user schema
const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userRole: { type: String, default: "user", enum: ["user", "admin"] },
    avatar: { type: String },
    addressSchema: [addressSchema],
})

userSchema.methods.createAuthToken = function () {
    //TODO secret keys env
    return jwt.sign({ _id: this._id, role: this.userRole, email: this.email }, "mySecretKey")
}

//define model 
const User = mongoose.model("Users", userSchema);
const Address = mongoose.model("Address", addressSchema);
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



module.exports = { User, validateUser, Address }