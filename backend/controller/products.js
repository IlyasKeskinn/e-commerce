const { Product, Comment, validateProduct } = require("../models/product");
const { mongoose } = require("mongoose");
const { Category } = require("../models/category");
const deleteOldImages = require("../helpers/deletePhoto");
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}


exports.getProdcutById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
        }
        res.status(201).json(product);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}
exports.postProduct = async (req, res) => {


    const { error } = validateProduct(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const product = new Product(req.body)
        await product.save();

        const selectedCategories = req.body.categories;

        for (const catId of selectedCategories) {
            await updateCategoryWithProducts(catId, product._id)
        }
        return res.json(product);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}
async function updateCategoryWithProducts(categoryId, productId) {
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }
        const isProductAlreadyInCategory = category.products.includes(productId);
        if (!isProductAlreadyInCategory) {
            category.products.push(productId);
            await category.save();
        } else {
            console.log("Product has already added.");
        }
    } catch (error) {

    }
}

async function updateCategoryDeleteProducts(categoryId, productId) {
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json({ error: "Category not found" });
        }
        const productIndex = category.products.indexOf(productId);
        if (productIndex !== -1) {
            category.products.splice(productIndex, 1);
            await category.save();
        }
    } catch (error) {

    }
}

exports.putUpdateProduct = async (req, res) => {
    const productId = req.params.id
    try {

        const selectedProduct = await Product.findById(productId);
        if (!selectedProduct) {
            res.status(404).json({ error: "Product not found" });
        }

        const { error } = validateProduct(req.body);

        if (error) {
            res.status(400).json({ error: error.details[0].message });
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        deleteOldImages(req.body.deletedImagePaths);

        const allCategories = req.body.categorylist;
        const selectedCategories = req.body.categories;
        for (const catId of allCategories) {
            if (selectedCategories.includes(catId._id)) {
                await updateCategoryWithProducts(catId._id, updatedProduct._id);
            } else {
                await updateCategoryDeleteProducts(catId._id, updatedProduct._id);
            }
        }
        res.json(updatedProduct);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const deletedItem = await Product.findOneAndDelete({ "_id": req.params.id });
        res.json(deletedItem);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}


//product comments

exports.putProductComment = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        const comment = new Comment(req.body);

        product.reviews.push(comment);

        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}

exports.deleteProductComment = async (req, res) => {
    const productId = req.params.id;
    const commentId = req.body.id;
    try {
        const product = await Product.findById(productId);
        if (!productId) {
            return res.status(404).json({ error: "Product not found" });
        }
        const comment = product.reviews.id(commentId);

        const commentIndex = product.reviews.indexOf(comment);

        product.reviews.splice(commentIndex, 1);

        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}

exports.putUpdateProdcutComment = async (req, res) => {
    const productId = req.params.id;
    const commentId = req.body.id;
    const updates = req.body;
    try {
        const product = await Product.findById(productId);
        if (!productId) {
            return res.status(404).json({ error: "Product not found" });
        }
        const comment = product.reviews.id(commentId);

        const commentIndex = product.reviews.indexOf(comment);

        product.reviews.splice(commentIndex, 1, updates);

        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}