const {mongoose,Schema} = require("mongoose");

const contactMsgSchema = mongoose.Schema({
    name : {type : String ,required : true},
    mail : {type : String ,required : true},
    msg : {type : String ,required : true},
    status : {type : String , default : "new"}
})

const ContactMsg = mongoose.model("ContactMsg", contactMsgSchema);

module.exports = {ContactMsg};