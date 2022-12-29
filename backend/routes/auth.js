const express = require('express');
const router = express.Router();

const {
    registerUser, 
    loginUser, 
    logoutUser, 
    getUserProfile, 
    forgotPassword,
    resetPassword} 
    = require('../controllers/authController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/me').get(getUserProfile);
router.route('/password/forgot').put(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

module.exports = router;