const express = require('express');

const {
  getAllCarts,
  addCart,
  getUserCart,
  deleteCart,
} = require('../controller/cart');

const router = express.Router();

router.get('/', getAllCarts);
router.get('/:userId', getUserCart);
router.post('/add', addCart);
router.delete('/:id', deleteCart);

module.exports = router;
