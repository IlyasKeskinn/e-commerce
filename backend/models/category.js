const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");

//creating schema
const categorySchema = mongoose.Schema({
    name: String,
    products: [{
        type: Schema.Types.ObjectId, ref: "Product"
    }]
});

//define model
const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(100),
        products : Joi.array()
    })
    return schema.validate(category);
}

module.exports = { Category, validateCategory }
