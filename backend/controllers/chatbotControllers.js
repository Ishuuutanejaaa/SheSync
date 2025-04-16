const db = require('../config/db');

const chatbotController = {
  getAnswer: async (req, res) => {
    const { question } = req.body;
    console.log("Received question:", question); // Debugging line

    try {
      const query = "SELECT * FROM chatbot_qa WHERE LOWER(TRIM(question)) = LOWER(TRIM(?))";
      const [rows, fields] = await db.execute(query, [question]);

      if (rows.length > 0) {
        console.log("Answer found:", rows[0].answer); // Debugging line
        return res.json({ answer: rows[0].answer });
      } else {
        return res.json({ answer: "Sorry, no answer found." });
      }
    } catch (error) {
      console.error("Error fetching answer:", error); // Debugging line
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = chatbotController;
