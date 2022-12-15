const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');

//Register a user => /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: 'johndoe',
            url: 'google.com/photos/johndoe'
        }
    })
    
    const token = user.getJwtToken();

    res.status(201).json({
        success: true,
        token
    })

});