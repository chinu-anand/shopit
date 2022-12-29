const express = require('express');
const router = express.Router();

const {
    registerUser, 
    loginUser, 
    logoutUser, 
    getUserProfile, 
    forgotPassword,
    resetPassword,
    updatePassword,
    updateProfile} 
    = require('../controllers/authController');

const {isAuthenticatedUser} = require('../middlewares/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/me').get(isAuthenticatedUser,getUserProfile);
router.route('/password/forgot').put(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/password/update').put(isAuthenticatedUser, updatePassword);
router.route('/me/update').put(isAuthenticatedUser, updateProfile);

module.exports = router;