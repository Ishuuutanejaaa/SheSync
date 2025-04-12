const db = require('../config/db');

const savePeriodData = (req, res) => {
  const { email, dates } = req.body;
  const values = dates.map(date => [email, date]);

  const query = 'INSERT INTO period_data (user_email, period_date) VALUES ?';
  db.query(query, [values], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Data saved successfully' });
  });
};

const predictPeriod = (req, res) => {
  const { dates } = req.body;
  const sorted = dates.map(date => new Date(date)).sort((a, b) => a - b);

  const cycleLengths = [
    (sorted[1] - sorted[0]) / (1000 * 60 * 60 * 24),
    (sorted[2] - sorted[1]) / (1000 * 60 * 60 * 24),
  ];

  const avgCycleLength = Math.round((cycleLengths[0] + cycleLengths[1]) / 2);
  const lastDate = new Date(sorted[2]);
  const nextPeriod = new Date(lastDate.setDate(lastDate.getDate() + avgCycleLength));

  res.json({ predicted_date: nextPeriod.toISOString().split('T')[0] });
};

module.exports = { savePeriodData, predictPeriod };
