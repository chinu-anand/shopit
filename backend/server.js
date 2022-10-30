const app = require('./app');
const connectDatabase = require('./config/database')
const dotenv = require('dotenv').config({path: 'backend/config.env'});

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV}`);
})