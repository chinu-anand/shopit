const Product = require('../models/product')

// Create new Product => /api/v1/products

exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,

    });
}

// Get all Products => /api/v1/products

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products in database."
    })
}

// Delete a product => /api/v1/admin/product/:id
