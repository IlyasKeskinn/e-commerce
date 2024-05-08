require('express-async-errors');
const { Product, Comment, LimitedProducts, validateProduct } = require("../models/product");
const slugField = require("../helpers/slugField");
const deleteOldImages = require("../helpers/deletePhoto");

exports.getProducts = async (req, res) => {
    const products = await Product.find().populate("categories").populate("subcategories").limit(8);
    res.json(products);
}

exports.getProductById = async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId)
        .populate({ path: "categories", select: "name" })
        .populate({ path: "subcategories", select: "name" })
        .populate({
            path: "reviews",
        });

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.status(201).json(product);

}
exports.getProductBySeo = async (req, res) => {
    const seo_link = req.params.seo_link;

    const product = await Product.findOne({ "seo_link": seo_link }).populate({ path: "categories", select: "name" }).populate({ path: "subcategories", select: "name" })
    if (!product) {
        res.status(404).json({ error: "Product not found" });
    }
    res.status(201).json(product);

}

exports.searchProduct = async (req, res) => {
    query = req.query;
    const products = await Product.find(
        {
            $or:
                [
                    { title: new RegExp(`.*${req.query.query}.*`, 'i') },
                    { shortDesc: new RegExp(`.*${req.query.query}.*`, 'i') }
                ]
        }
    );

    if (products.length === 0) {
        return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json(products);
}

exports.postProduct = async (req, res) => {

    const seo_link = slugField(req.body.title);
    const body = { ...req.body, "seo_link": seo_link }
    const { error } = validateProduct(body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const product = new Product(body)
    await product.save();

    return res.json(product);
}
exports.putUpdateProduct = async (req, res) => {
    const productId = req.params.id;
    const seo_link = slugField(req.body.title);
    const body = { ...req.body, "seo_link": seo_link }

    const selectedProduct = await Product.findById(productId);
    if (!selectedProduct) {
        return res.status(404).json({ error: "Product not found" });
    }

    const { error } = validateProduct(body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const updatedProduct = await Product.findOneAndUpdate({ _id: productId }, body, { new: true });
    deleteOldImages(req.body.deletedImagePaths);

    return res.json(updatedProduct);
}

exports.deleteProduct = async (req, res) => {
    const deletedItem = await Product.findOneAndDelete({ "_id": req.params.id });
    res.json(deletedItem);
}


//product comments

//get all comments
exports.getProductsComments = async (req, res) => {
    const products = await Product.find().select("reviews").populate("reviews");
    res.json(products);
}

exports.putProductComment = async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    const comment = new Comment(req.body);

    product.reviews.push(comment);

    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);
}

exports.deleteProductComment = async (req, res) => {
    const productId = req.params.id;
    const commentId = req.body.id;

    const product = await Product.findById(productId);
    if (!productId) {
        return res.status(404).json({ error: "Product not found" });
    }
    const comment = product.reviews.id(commentId);

    const commentIndex = product.reviews.indexOf(comment);

    product.reviews.splice(commentIndex, 1);

    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);


}

exports.putUpdateProductComment = async (req, res) => {
    const productId = req.params.id;
    const commentId = req.body._id;
    const updates = req.body;

    const product = await Product.findById(productId);
    if (!productId) {
        return res.status(404).json({ error: "Product not found" });
    }
    const comment = product.reviews.id(commentId);

    const commentIndex = product.reviews.indexOf(comment);

    product.reviews.splice(commentIndex, 1, updates);

    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);

}


//limited products
exports.getLimitedProducts = async (req, res) => {
    const limitedProducts = await LimitedProducts.find().populate("product");
    res.status(200).json(limitedProducts);
}

exports.postLimitedProducts = async (req, res) => {
    const productBody = req.body;

    const newProduct = new LimitedProducts(productBody);

    await newProduct.save();

    res.status(200).json(newProduct);
}

exports.deleteLimitedProducts = async (req, res) => {
    const productId = req.params.id;

    const limitedProduct = await LimitedProducts.findById(productId);

    if (!limitedProduct) {
        res.status(404).json({ "error": "Limited product not found!" });
    }

    const deletedProduct = await LimitedProducts.findOneAndDelete({ "_id": productId });
    res.status(200).json(deletedProduct);
}