const Order = require('../models/order');
const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Create a new order => /api/v1/order/new
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo
    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user.id
    })

    res.status(200).json({
        success: true,
        order
    })
})

// Get single order => /api/v1/order/:id
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name emial');

    if (!order) {
        return next(new ErrorHandler('No order found with this ID', 404));
    }

    res.status(200).json({
        success: true,
        order
    })
})

// Get logged in user's orders => /api/v1/orders/me
exports.getMyOrders = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.find({ user: req.user.id });

    res.status(200).json({
        success: true,
        order
    })
})

// Get all orders => /api/v1/admin/orders
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find();

    let totalAmount = 0;
    let noOfOrders = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice;
        noOfOrders++;
    })

    res.status(200).json({
        success: true,
        noOfOrders,
        totalAmount,
        orders
    });
});

// Update/Process Order -Admin => /api/v1/admin/order/:id
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('Order already delivered', 400));
    }

    order.orderStatus = req.body.orderStatus;

    if (order.orderStatus === 'Delivered') {
        order.orderItems.forEach(async item => {
            await updateStocks(item.product, item.quantity);
        })

        order.deliveredAt = Date.now();

        await order.save();
    }

    res.status(200).json({
        success: true
    })
});

// Delete order => /api/v1/admin/order/:id
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler('No order found with this ID', 404));
    }

    await order.remove();

    res.status(200).json({
        success: true,
    })
})

// function to update stocks as order processes
async function updateStocks(id, quantity) {
    const product = await Product.findById(id);

    product.stock = product.stock - quantity;

    await product.save({ validateBeforeSave: false });
}