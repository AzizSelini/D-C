const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  category: {
    type: String,
    enum: ['clothes', 'shoes', 'accessories'],
  },
  price: Number,
  image: String,
  stock: Number,
  description: String,
  date_added: { type: Date, default: Date.now },
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
