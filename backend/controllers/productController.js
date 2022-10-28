const Product = require('../models/product')
const mongoose = require('mongoose');

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

// Get Single product => /api/v1/product/:id

exports.getSingleProduct = async (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);

    if (!isValidId) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    const product = await Product.findById(req.params.id);

    res.status(200).json({
        success: true,
        product
    })
}

// Delete a product => /api/v1/admin/product/:id
