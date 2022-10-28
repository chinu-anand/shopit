const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDb = require('../config/database');

const products = require('../data/products.json');

// setting dotenv file
dotenv.config({ path: 'backend/config/config.env' });

connectDb();

const seedProducts = async () => {
    try {
        // deleting all existing products
        await Product.deleteMany();
        console.log("Products are deleted successfully");

        await Product.insertMany(products);
        console.log("Products are inserted successfully");
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();