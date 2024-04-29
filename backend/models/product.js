const { mongoose, Schema, disconnect } = require("mongoose");
const Joi = require("joi");
const { Category, Subcategory } = require("./category");

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
    desc: { type: String, required: true },
    shortDesc: { type: String, required: true },
    price: {
        current: { type: Number, required: true },
        discount: { type: Number }
    },
    images: { type: Array, required: true },
    categories:
        { type: Schema.Types.ObjectId, ref: "Categories", required: true }
    ,
    subcategories: [{ type: Schema.Types.ObjectId, ref: "Subcategories" }],
    reviews: [reviewSchema],
}, { timestamps: true });

productSchema.pre('save', async function (next) {
    try {
        const category = await Category.findById(this.categories);
        if (category && !category.products.includes(this._id)) {
            category.products.push(this._id)
            await category.save();
        }
        this.subcategories.forEach(async subCat => {
            const subCategory = await Subcategory.findById(subCat);
            if (subCategory && !subCategory.products.includes(this._id)) {
                subCategory.products.push(this._id)
                await subCategory.save();
            }
        });
        next();
    } catch (error) {
        next(error);
    }
});

productSchema.post('findOneAndUpdate', async function (doc, next) {
    const mainCategoryId = this._update.$set.categories;
    const subcategories = this._update.$set.subcategories;
    const prorductId = doc.id;
    try {
        await updateCategory(mainCategoryId, prorductId);
        await updateSubcategory(subcategories, prorductId);
        next();
    } catch (error) {
        next(error);
    }
})

productSchema.post('findOneAndDelete', async function (doc, next) {
    try {
        const productId = doc.id;

        await deleteCategory(productId);
        await deleteSubcategory(productId);


        next();
    } catch (error) {
        next(error)
    }
})

async function updateCategory(mainCategoryId, productId) {
    const category = await Category.findById(mainCategoryId);
    const allCategories = await Category.find();
    if (!category) {
        console.log("Category not found");
        return;
    }
    const isProductAlreadyInCategory = category.products.includes(productId);
    if (!isProductAlreadyInCategory) {
        category.products.push(productId);
        await category.save();
    } else {
        console.log("Product has already added.");
    }
    for (const cat of allCategories) {
        if (cat._id.toString() !== mainCategoryId.toString()) {
            const otherProductIndex = cat.products.indexOf(productId);
            if (otherProductIndex !== -1) {
                cat.products.splice(otherProductIndex, 1);
                await cat.save();
            }
        }
    }
}
async function deleteCategory(productId) {
    const allCategories = await Category.find();

    for (const cat of allCategories) {
        const otherProductIndex = cat.products.indexOf(productId);
        if (otherProductIndex !== -1) {
            cat.products.splice(otherProductIndex, 1);
            await cat.save();
        }
    }
}

//subcategory
async function updateSubcategory(subCatIds, productId) {
    const allCategories = await Subcategory.find();

    for (const subcatId of subCatIds) {
        const category = await Subcategory.findById(subcatId);
        if (!category) {
            console.log("Category not added");
        }
        const isProductAddAlready = category.products.includes(productId);
        if (isProductAddAlready) {
            console.log("Product has been already added.");
        } else {
            category.products.push(productId);
            category.save();
        }
    }

    for (const cat of allCategories) {
        for (const subcatId of subCatIds) {
            if (cat._id.toString() !== subcatId) {
                const catIndex = cat.products.indexOf(productId);
                if (catIndex !== -1) {
                    cat.products.splice(catIndex, 1);
                    await cat.save();
                }
            }
        }
    }
}

async function deleteSubcategory(productId) {
    const allCategories = await Subcategory.find();

    for (const cat of allCategories) {
        const catIndex = cat.products.indexOf(productId);
        if (catIndex !== -1) {
            cat.products.splice(catIndex, 1);
            await cat.save();
        }
    }
}



//define model
const Product = mongoose.model("Products", productSchema);
const Comment = mongoose.model("Reviews", reviewSchema);

function validateProduct(product) {
    const schema = Joi.object({
        title: Joi.string().required().min(3).max(100),
        color_options: Joi.array().required(),
        size_options: Joi.array().required(),
        desc: Joi.string().required().min(10),
        shortDesc: Joi.string().required().min(10),
        price: Joi.object().required(),
        images: Joi.array().required(),
        categories: Joi.string().required(),
        current: Joi.number(),
        discount: Joi.number(),
        categorylist: Joi.allow(),
        deletedImagePaths: Joi.allow(),
        subcategories: Joi.array(),

    })
    return schema.validate(product);
}


module.exports = { Product, Comment, validateProduct };

