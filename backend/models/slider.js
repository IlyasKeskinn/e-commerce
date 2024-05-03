const {mongoose,Schema} = require("mongoose");

const sliderSchema = mongoose.Schema({
    title : {type : String ,required : true},
    sub_title : {type : String ,required : true},
    img : {type : String , required : true},
    topic : {type :String},
    desc : {type :String}
})

const Slider = mongoose.model("Sliders", sliderSchema);

module.exports = {sliderSchema, Slider};