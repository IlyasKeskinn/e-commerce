const { mongoose, Schema, disconnect } = require("mongoose");
const Joi = require("joi");


//creating schema
const productSchema = mongoose.Schema({
    title: String,
    color_options: Array,
    size_options: Array,
    image: Object,
    desc: String,
    price : {
        current : {type : Number, required : true},
        discount: {type : Number ,required : true}
    },
    addedDate: {
        type: Schema.Types.Date,
        default: Date.now()
    },
    images: Array,
    categories: [
        { type: Schema.Types.ObjectId, ref: "Categories" }
    ],
});

//define model
const Product = mongoose.model("Products", productSchema);
function validateProduct(product) {
    const schema = Joi.object({
        title: Joi.string().required().min(3).max(100),
        color_options: Joi.array().required(),
        size_options: Joi.array().required(),
        desc: Joi.string().required().min(10),
        price: Joi.object().required(),
        addedDate: Joi.date(),
        images: Joi.array().required(),
        categories: Joi.array().required(),

    })
    return schema.validate(product);
}


module.exports = { Product, validateProduct };

