const Product = require('../model/product');

const getAllProduct = (req, res) => {
  Product.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: 'products not found', error: err.message });
    });
};
const getAllClothes = async (req, res) => {
  try {
    await Product.find({ category: req.params.category }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};
const getAllShoes = async (req, res) => {
  try {
    await Product.find({ category: req.params.category }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    res.json(err);
  }
};

const oneProduct = (req, res) => {
  Product.find(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: 'product not found', error: err.message });
    });
};
const search = (req, res) => {
  Product.find({ name: {$regex :req.params.search}  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "product not found", error: err.message });
    });
};
const addProduct = (req, res) => {
  Product.create(req.body)
    .then((data) => {
      res.status(201).json({ message: 'successfuly added', data });
    })
    .catch((err) => {
      res.status(400).json({ message: 'failed add', error: err.message });
    });
};

const deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({ message: 'yayy deleted', result });
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: 'Product not found', error: err.message });
    });
};

// const updateProduct = (req, res) => {
//   Product.findByIdAndUpdate(req.params._id, req.body)
//     .then((data) => {
//       res.status(200).json({ message: 'yayy updated', data });
//     })
//     .catch((err) => {
//       res
//         .status(404)
//         .json({ message: 'Product not found', error: err.message });
//     });
// };
const UpdateProduct = async (req, res) => {
 
    Product.findOneAndUpdate({ _id:req.params._id} ,
        
     req.body,
    
      (err, result) => {
        if (err) console.log(err);
        res.json(result);}
    )
};
module.exports = {
  getAllProduct,
  addProduct,
  deleteProduct,
  
  oneProduct,
  search,
  getAllClothes,
  UpdateProduct,
  getAllShoes,
};
