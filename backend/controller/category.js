const mongoose = require("mongoose");
const { Category, validateCategory, SubCategory } = require("../models/category");

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }
    }
}

exports.getCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }
    }
}

exports.postCategory = async (req, res) => {
    const { error } = validateCategory(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }
    const category = new Category({
        name: req.body.name,
        products: req.body.products
    })
    try {
        await category.save();
        res.status(200).json(category)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }
    }
}

exports.putUpdateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const updates = req.body
    const { error } = validateCategory(updates)

    if (error) {
        res.status(400).json(error.details[0].message);
    }

    try {
        const category = await Category.findById(categoryId);

        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }

        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updates, {
            new: true
        });
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }
    }
}

exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }
        const deletedCategory = await Category.findOneAndDelete({ "_id": categoryId });
        res.status(200).json(deletedCategory);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.name });
        }

    }
}


//sub category controller


exports.putSubCategory = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        const subCategory = new SubCategory(req.body);

        category.subcategory.push(subCategory);

        const updatedCategory = await category.save();

        res.status(200).json(updatedCategory);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}

exports.deleteSubCategory = async (req, res) => {
    const categoryId = req.params.id;
    const subCategoryId = req.body.subCategoryId;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        const subCategory = category.subcategory.id(subCategoryId);

        const subCategoryIndex = category.subcategory.indexOf(subCategory);

        category.subcategory.splice(subCategoryIndex, 1);

        const updatedCategory = await category.save();

        res.status(200).json(updatedCategory);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}
exports.getSubcategory = async (req, res) => {
    const categoryId = req.params.id;
    const subCategoryId = req.body.subCategoryId;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        const subCategory = category.subcategory.id(subCategoryId);
        res.status(200).json(subCategory);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }

}

exports.putUpdateSubCategory = async (req, res) => {
    const categoryId = req.params.id;
    const subCategoryId = req.body.id;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        const subCategory = category.subcategory.id(subCategoryId);

        subCategory.name = req.body.name;

        const updatedCategory = await category.save();

        res.status(200).json(updatedCategory);

    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({error : error.message});
        }
    }
}