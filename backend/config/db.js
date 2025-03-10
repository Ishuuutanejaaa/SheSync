const mysql = require('mysql2');
require('dotenv').config();

// const db = mysql.createConnection({
//     host: process.env.DB_HOST || '192.168.203.100',
//     user: process.env.DB_USER || 'teamuser',
//     password: process.env.DB_PASSWORD || 'password123',
//     database: process.env.DB_NAME || 'she_sync'
// });

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'new_password',
    database: process.env.DB_NAME || 'sheSync'
});


db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Connected to MySQL Database.");
    }
});

module.exports = db;

