const productModel = require('../models/productModel');
require("dotenv").config();

const formatProduct = (product) => {
  const images = [];
  if (product.image1) images.push(product.image1);
  if (product.image2) images.push(product.image2);
  if (product.image3) images.push(product.image3);
  if (product.image4) images.push(product.image4);

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    images
  };
};

exports.getAllProducts = (req, res) => {
  const sort = req.query.sort;
  productModel.getAllProducts(sort, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const formatted = results.map(formatProduct);
    res.json(formatted);
  });
};

exports.getProductById = (req, res) => {
  productModel.getProductById(req.params.id, (err, product) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!product) return res.status(404).json({ message: "Product not found" });

    const formatted = formatProduct(product);
    res.json(formatted);
  });
};

exports.addProduct = (req, res) => {
  productModel.addProduct(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Product added", id: result.insertId });
  });
};

exports.updateProduct = (req, res) => {
  productModel.updateProduct(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product updated" });
  });
};

exports.deleteProduct = (req, res) => {
  productModel.deleteProduct(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Product deleted" });
  });
};
