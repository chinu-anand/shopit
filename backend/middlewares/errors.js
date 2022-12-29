const ErrorHandler = require('../utils/errorHandler');


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            sucess: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = { ...err };

        error.message = err.message;

        // Wrong mongoose id error message
        if (err.name == 'CastError') {
            const message = `Resource not found: ${err.path}`;
            error = new ErrorHandler(message, 400);
        }

        // handling mongoose validation error
        if (err.name == 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }

        // handling mongoose duplicate errors
        if (err.code === 11000) {
            const message = `${Object.keys(err.keyValue)} already exists`;
            error = new ErrorHandler(message, 400);
        }

        // handling wrong JWT error
        if (err.name == 'JsonWebTokenError') {
            const message = `JSON Web Token is invalid.`;
            error = new ErrorHandler(message, 400);
        }

        // handling expired JWT error
        if (err.name == 'TokenExpiredError') {
            const message = `JSON Web Token is expired.`;
            error = new ErrorHandler(message, 400);
        }

        res.status(error.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error'
        });
    }

}