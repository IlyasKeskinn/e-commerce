const { mongoose, Schema, disconnect } = require("mongoose");
const Joi = require("joi");

//creating reviews schema 

const reviewSchema = mongoose.Schema({
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

}, { timestamps: true })

//creating product schema
const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    color_options: { type: Array, required: true },
    size_options: { type: Array, required: true },
    desc: String,
    price: {
        current: { type: Number, required: true },
        discount: { type: Number }
    },
    addedDate: {
        type: Schema.Types.Date,
        default: Date.now()
    },
    images: { type: Array, required: true },
    categories: [
        { type: Schema.Types.ObjectId, ref: "Categories", required: true }
    ],
    reviews: [reviewSchema]
});

//define model
const Product = mongoose.model("Products", productSchema);
const Comment = mongoose.model("Reviews", reviewSchema);

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
        current: Joi.number(),
        discount : Joi.number(),
        categorylist : Joi.allow(),
        deletedImagePaths : Joi.allow()

    })
    return schema.validate(product);
}


module.exports = { Product, Comment, validateProduct };

