const Product = require('../models/product')

// Create new Product => /api/v1/products

exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,

    });
}

// Display all Products => /api/v1/products

exports.getProducts = async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    })
}

// Delete a product => /api/v1/admin/product/:id
