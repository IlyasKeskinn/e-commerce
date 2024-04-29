const { mongoose, Schema } = require("mongoose");
const Joi = require("joi");


//creating subcategory 
const subCategorySchema = mongoose.Schema({
    name: String,
    maincategory: { type: Schema.Types.ObjectId, ref: "Categories" },
    products: [{
        type: Schema.Types.ObjectId, ref: "Products"
    }]

})
//creating schema
const categorySchema = mongoose.Schema({
    name: String,
    subcategory: [{ type: Schema.Types.ObjectId, ref: "Subcategories" }],
    products: [{
        type: Schema.Types.ObjectId, ref: "Products"
    }]
});


subCategorySchema.pre("save", async function (next) {
    const category = await Category.findById(this.maincategory);
    try {
        if (category && !category.subcategory.includes(this._id)) {;
            category.subcategory.push(this._id)
            await category.save();
        }
        next();
    } catch (error) {
        next(error)
    }
})

subCategorySchema.post("findOneAndUpdate", async function (doc, next) {
    try {
        const subCatId = doc.id;
        console.log(this._update.$set.maincategory);
        const mainCategoryId = this._update.$set.maincategory;
        await updateSubcategory(mainCategoryId, subCatId);
        next();
    } catch (error) {
        next(error);
    }
})



subCategorySchema.post("findOneAndDelete", async function (doc, next) {
    try {
        const subCatId = doc.id;
        await deleteSubcategory(subCatId);
        next();
    } catch (error) {
        next(error);
    }
})

async function updateSubcategory(mainCategoryId, subCatId) {
    const category = await Category.findById(mainCategoryId);
    const allCategories = await Category.find();
    if (!category) {
        return;
    }
    const isSubcategoryAlreadyInCategory = category.subcategory.includes(subCatId);
    if (!isSubcategoryAlreadyInCategory) {
        category.subcategory.push(subCatId);
        await category.save();
    }

    for (const cat of allCategories) {
        if (cat._id.toString() !== mainCategoryId.toString()) {
            const otherProductIndex = cat.subcategory.indexOf(subCatId);
            if (otherProductIndex !== -1) {
                cat.subcategory.splice(otherProductIndex, 1);
                await cat.save();
            }
        }
    }
}

async function deleteSubcategory(subCatId) {
    const allCategories = await Category.find();

    for (const cat of allCategories) {
        const otherCategoryIndex = cat.subcategory.indexOf(subCatId);
        if (otherCategoryIndex !== -1) {
            cat.subcategory.splice(otherCategoryIndex, 1);
            await cat.save();
        }
    }
}

//define model
const Category = mongoose.model("Categories", categorySchema);
const Subcategory = mongoose.model("Subcategories", subCategorySchema)

function validateCategory(category) {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(100),
        subcategory: Joi.array(),
        products: Joi.allow()
    })
    return schema.validate(category);
}

module.exports = { Category, validateCategory, Subcategory }


