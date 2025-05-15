const db = require('../config/db');

const ContactMessage = {
  create: (name, email, message, callback) => {
    const sql = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, results) => {
      if (err) {
        console.error("Database insert error:", err);
        return callback(err);
      }
      console.log("Database insert success:", results);
      callback(null, results);
    });
  }
};

module.exports = ContactMessage;
