const { Product, Comment, LimitedProducts, validateProduct } = require("../models/product");
const { mongoose } = require("mongoose");
const slugField = require("../helpers/slugField");
const deleteOldImages = require("../helpers/deletePhoto");
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("categories").populate("subcategories").limit(8);
        res.json(products);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json(error.message);
        }
    }
}


exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
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
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json(error.message);
        }
    }
}
exports.getProductBySeo = async (req, res) => {
    const seo_link = req.params.seo_link;
    try {
        const product = await Product.findOne({ "seo_link": seo_link }).populate({ path: "categories", select: "name" }).populate({ path: "subcategories", select: "name" })
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

exports.searchProduct = async (req, res) => {
    try {
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
    } catch (error) {
        if (error instanceof Error) {

        }
    }
}

exports.postProduct = async (req, res) => {

    const seo_link = slugField(req.body.title);
    const body = { ...req.body, "seo_link": seo_link }
    const { error } = validateProduct(body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const product = new Product(body)
        await product.save();

        return res.json(product);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.putUpdateProduct = async (req, res) => {
    const productId = req.params.id;
    const seo_link = slugField(req.body.title);
    const body = { ...req.body, "seo_link": seo_link }
    try {
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
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
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

exports.putUpdateProductComment = async (req, res) => {
    const productId = req.params.id;
    const commentId = req.body._id;
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


exports.getLimitedProducts = async (req, res) => {
    try {
        const limitedProducts = await LimitedProducts.find().populate("product");
        res.status(200).json(limitedProducts);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message })
        }
    }
}

exports.postLimitedProducts = async (req, res) => {
    try {
        const productBody = req.body;

        const newProduct = new LimitedProducts(productBody);

        await newProduct.save();

        res.status(200).json(newProduct);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
}

exports.deleteLimitedProducts = async (req, res) => {
    try {
        const productId = req.params.id;

        const limitedProduct = await LimitedProducts.findById(productId);

        if (!limitedProduct) {
            res.status(404).json({ "error": "Limited product not found!" });
        }

        const deletedProduct = await LimitedProducts.findOneAndDelete({ "_id": productId });
        res.status(200).json(deletedProduct);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "error": error.message });
        }
    }
}