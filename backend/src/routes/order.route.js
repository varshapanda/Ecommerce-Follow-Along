const express = require('express');
const router = express.Router();
const verifyUser = require('../middlewares/jwt-verify.js');

const {
    GetUserOrdersController, 
    CreateOrderController,
    CancelOrder
} = require('../controllers/order.controller.js');

router.get('/user-orders-data', verifyUser, GetUserOrdersController);
router.post('/confirm-order', verifyUser, CreateOrderController);
router.patch('/cancel-order', verifyUser, CancelOrder);

module.exports = router;