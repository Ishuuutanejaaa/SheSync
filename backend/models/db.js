const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'Ishika',
    password: process.env.DB_PASSWORD || 'Ishika@3110',
    database: process.env.DB_NAME || 'she_sync'
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Connected to MySQL Database.");
    }
});

module.exports = db;

