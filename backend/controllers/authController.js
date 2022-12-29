const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

//Register a user => /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'johndoe',
            url: 'google.com/photos/johndoe'
        }
    })

    sendToken(user, 200, res);

});

// Login User => /api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    // check if email and password are entered by the user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email and password', 400));
    }

    // finding user in the database
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401));
    }

    //check if password is correct
    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        return next(new ErrorHandler('Invalid email or password', 401));
    }

    sendToken(user, 200, res);

})

// Forgot Password => /api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler('User not found with this email', 404));
    }

    // get reset token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // create resetUrl
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'ShopIT password recovery email',
            message
        })


        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully.`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500))
    }
})

// Reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now()
        }
    })

    if (!user) {
        return next(new ErrorHandler('Password reset token is invalid or has been expired', 400));
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }

    //Setup new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
})

// Get logged in user details => /api/v1/me
exports.getUserProfile = catchAsyncError(async (req,res,next) =>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler('Login first to access this resource.', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id)

    const user = await User.findById(req.user);

    res.status(200).json({
        success: true,
        user
    });
})

// Logout user => /api/v1/logout
exports.logoutUser = catchAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'User logged out'
    })
})