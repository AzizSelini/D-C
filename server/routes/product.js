const express = require('express');

const {
  getAllProduct,
  addProduct,
  deleteProduct,
  UpdateProduct,
  oneProduct,

  getAllClothes,
  getAllShoes,

  search,
 
} = require('../controller/product');

const router = express.Router();

router.get('/', getAllProduct);
router.get('/oneProduct', oneProduct);
router.get("/search/:search", search);

router.get('/:category', getAllClothes);
router.get('/:category', getAllShoes);
router.post('/', addProduct);
router.delete('/:_id', deleteProduct);
router.put('/:_id', UpdateProduct);

module.exports = router;
