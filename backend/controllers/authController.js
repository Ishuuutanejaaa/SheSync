const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: "Error encrypting password" });

        User.createUser(name, email, hashedPassword, (error, result) => {
            if (error) return res.status(500).json({ error: "Database error" });
            res.status(201).json({ message: "User registered successfully" });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findUserByEmail(email, (error, results) => {
        if (error || results.length === 0) return res.status(401).json({ error: "Invalid credentials" });

        bcrypt.compare(password, results[0].password, (err, match) => {
            if (err || !match) return res.status(401).json({ error: "Invalid credentials" });

            const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: "Login successful", token });
        });
    });
};

