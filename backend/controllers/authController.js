const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');

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
    
    sendToken(user, 200, res);

});

// Login User => /api/v1/login
exports.loginUser = catchAsyncError(async (req, res,next) =>{
    const {email,password} = req.body;

    // check if email and password are entered by the user
    if(!email || !password){
        return next(new ErrorHandler('Please enter email and password', 400));
    }

    // finding user in the database
    const user = await User.findOne({email}).select('+password');

    if(!user){
        return next(new ErrorHandler('Invalid email or password', 401));
    }
    
    //check if password is correct
    const isPasswordCorrect = await user.comparePassword(password);
    
    if(!isPasswordCorrect){
        return next(new ErrorHandler('Invalid email or password', 401));
    }

    sendToken(user, 200, res);
    
})