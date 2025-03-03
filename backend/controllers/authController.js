const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

// User Registration
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the email already exists
        const checkQuery = "SELECT * FROM users WHERE email = ?";
        db.query(checkQuery, [email], async (err, results) => {
            if (err) return res.status(500).json({ message: "Database error" });

            if (results.length > 0) {
                return res.status(400).json({ message: "Email already exists" });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Insert user into database
            const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            db.query(query, [name, email, hashedPassword], (err, result) => {
                if (err) return res.status(500).json({ message: "Database error" });

                res.status(201).json({ message: "User registered successfully" });
            });
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// User Login
exports.login = (req, res) => {
    const { email, password } = req.body;

    // Check if email exists
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = results[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const token = jwt.sign(
            { userId: results[0].id },
            process.env.JWT_SECRET || "fallback_secret_key",
            { expiresIn: "1h" }
        );
        

        res.json({ message: "Login successful", token });
    });
};

// Get User Profile
exports.getProfile = (req, res) => {
    const userId = req.user.userId; // Extracted from JWT middleware

    const query = "SELECT id, name, email FROM users WHERE id = ?";
    db.query(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (results.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(results[0]);
    });
};
