const db = require('../config/db');

const getAllProducts = (sort, callback) => {
  let query = 'SELECT * FROM products';

  if (sort) {
    switch (sort) {
      case 'price_asc':
        query += ' ORDER BY price ASC';
        break;
      case 'price_desc':
        query += ' ORDER BY price DESC';
        break;
      case 'name_asc':
        query += ' ORDER BY name ASC';
        break;
      case 'name_desc':
        query += ' ORDER BY name DESC';
        break;
      default:
        break;
    }
  }

  db.query(query, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

const getProductById = (id, callback) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

const addProduct = (productData, callback) => {
  const { name, price, description, image1, image2, image3, image4 } = productData;
  const query = 'INSERT INTO products (name, price, description, image1, image2, image3, image4) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, price, description, image1, image2, image3, image4], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

const updateProduct = (id, productData, callback) => {
  const { name, price, description, image1, image2, image3, image4 } = productData;
  const query = 'UPDATE products SET name=?, price=?, description=?, image1=?, image2=?, image3=?, image4=? WHERE id=?';
  db.query(query, [name, price, description, image1, image2, image3, image4, id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

const deleteProduct = (id, callback) => {
  const query = 'DELETE FROM products WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
