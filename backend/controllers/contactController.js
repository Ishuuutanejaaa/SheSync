const ContactMessage = require('../models/ContactMessage');

exports.submitContactForm = (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    ContactMessage.create(name, email, message, (err, results) => {
        if (err) {
            console.error("Error saving contact message:", err);
            return res.status(500).json({ error: "Failed to save message." });
        }
        return res.status(200).json({ message: "Contact form submitted successfully." });
    });
};
