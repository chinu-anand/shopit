const mongoose = require('mongoose');


// Define schema for the products.
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },

    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product price cannot exceed 5 characters'],
        defaultValue: 0.0
    },

    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },

    ratings: {
        type: Number,
        defaultValue: 0,
    },

    image: [
        {
            public_id: {
                type: String,
                required: true,

            },

            url: {
                type: String,
                required: true,
            },
        }
    ],

    category: {
        type: String,
        required: [true, 'Please select product category'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes',
                'Shoes',
                'Home',
                'Beauty',
            ],

            message: 'Please select a category'
        }
    },

    seller: {
        type: String,
        required: [true, 'Please select product seller'],
    },

    stock: {
        type: Number,
        required: [true, 'Please select product stock'],
        maxlength: [5, 'Product stock cannot be more than 5']
    },

    numOfReviews: {
        type: Number,
        default: 0,
    },

    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Product', productSchema);