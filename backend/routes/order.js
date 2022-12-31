const express = require('express');
const router = express.Router();

const {
    newOrder,
    getSingleOrder,
    getMyOrders,
    getAllOrders
} = require('../controllers/orderController');

const {
    isAuthenticatedUser,
    authorizeRoles
} = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, getMyOrders);

router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles('admin'), getAllOrders);

module.exports = router;