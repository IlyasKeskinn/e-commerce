const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");


//creating subcategory 
const subCategorySchema = mongoose.Schema({
    name: String,
    maincategory : {type : Schema.Types.ObjectId, ref : "Categories"},
    products: [{
        type: Schema.Types.ObjectId, ref: "Products"
    }]

})
//creating schema
const categorySchema = mongoose.Schema({
    name: String,
    subcategory: [{type : Schema.Types.ObjectId, ref : "Subcategories"}],
    products: [{
        type: Schema.Types.ObjectId, ref: "Products"
    }]
});

//define model
const Category = mongoose.model("Categories", categorySchema);
const Subcategory = mongoose.model("Subcategories", subCategorySchema)

function validateCategory(category) {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(100),
        subcategory: Joi.array(),
        products : Joi.allow()
    })
    return schema.validate(category);
}

module.exports = { Category, validateCategory, Subcategory }
