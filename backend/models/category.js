const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");


//creating subcategory 
const subCategorySchema = mongoose.Schema({
    name : String,
    products: [{
        type: Schema.Types.ObjectId, ref: "Products"
    }]
})
//creating schema
const categorySchema = mongoose.Schema({
    name: String,
    subcategory : [subCategorySchema],
    products: [{
        type: Schema.Types.ObjectId, ref: "Products"
    }]
});

//define model
const Category = mongoose.model("Categories", categorySchema);
const SubCategory = mongoose.model("SubCategoies", subCategorySchema)

function validateCategory(category) {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(100),
        subcategory : Joi.array()
    })
    return schema.validate(category);
}

module.exports = { Category, validateCategory, SubCategory }
