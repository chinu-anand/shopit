const Product = require('../models/product')
const mongoose = require('mongoose');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

// Create new Product => /api/v1/products

exports.newProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
})

// Display all Products => /api/v1/products?keyword=apple

exports.getProducts = catchAsyncError(async (req, res, next) => {
    const productCount = await Product.countDocuments();
    const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(3)

    const products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        count: products.length,
        productCount,
        data: products
    })
})

// Get Single product => /api/v1/product/:id

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);

    if (!isValidId) {
        return next(new ErrorHandler('Product not found', 404));
    }

    const product = await Product.findById(req.params.id);

    res.status(200).json({
        success: true,
        product
    })
})

// Update product => /api/v1/product/:id
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);

    if (!isValidId) {
        return next(new ErrorHandler('Product not found', 404));
    }

    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindandModify: false
    });

    res.status(200).json({
        success: true,
        product
    });
})

// Delete a product => /api/v1/admin/product/:id

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!isValidId) {
        return next(new ErrorHandler('Product not found', 404));
    }

    const product = await Product.findById(req.params.id);

    // if (!product) {
    //     return next(new ErrorHandler('Product not found', 404));
    // }

    await product.remove();
    res.status(200).json({
        success: true,
        message: 'Product deleted'
    });
})