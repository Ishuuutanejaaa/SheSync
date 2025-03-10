const db = require("../config/db");
require("dotenv").config();

exports.getAllProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    db.query("SELECT * FROM products WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Product not found" });
        res.json(results[0]);
    });
};

exports.addProduct = (req, res) => {
    const { name, price, description, image } = req.body;
    db.query("INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)",
        [name, price, description, image], 
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Product added", id: result.insertId });
        }
    );
};

exports.updateProduct = (req, res) => {
    const { name, price, description, image } = req.body;
    db.query("UPDATE products SET name=?, price=?, description=?, image=? WHERE id=?",
        [name, price, description, image, req.params.id], 
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Product updated" });
        }
    );
};

exports.deleteProduct = (req, res) => {
    db.query("DELETE FROM products WHERE id = ?", [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Product deleted" });
    });
};