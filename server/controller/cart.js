const Cart = require('../model/cart');

const getAllCarts = (req, res) => {
  Cart.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Cart not found', error: err.message });
    });
};

const getUserCart = (req, res) => {
  Cart.findOne({ userId: req.params.userId })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Cart not found', error: err.message });
    });
};
const addCart=(req,res)=>{
    Cart.create(req.body)
    .then((data) => {
        res.status(201).json({ message: 'successfuly added', data });
      })
      .catch((err) => {
        res.status(400).json({ message: 'failed add', error: err.message });
      });
}
const deleteCart =(req,res)=>{
    Cart.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).json({ message: 'Cart not found', error: err.message });
      });
}

module.exports = { getAllCarts,addCart, getUserCart ,deleteCart};
