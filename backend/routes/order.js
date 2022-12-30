const express = require('express');
const router = express.Router();

const {
    newOrder
} = require ('../controllers/orderController');

const {
    isAuthenticated,
    authorizeRoles
} = require ('../middlewares/auth')

router.route('/order/new').post(isAuthenticated, newOrder);

module.exports = router;