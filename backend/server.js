const app = require('./app');
const connectDatabase = require('./config/database')
const dotenv = require('dotenv').config({ path: 'backend/config.env' });

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV}`);
})

// Handle Unhandled Promise rejections

process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down server due to unhandled rejection')
    server.close(() => {
        process.exit(1);
    });
})