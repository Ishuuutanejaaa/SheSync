import React, { useState } from 'react';
import axios from 'axios';
import './Tracker.css';

function Tracker() {
  const [email, setEmail] = useState('');
  const [dates, setDates] = useState(['', '', '']);
  const [predictedDate, setPredictedDate] = useState('');

  const handleChange = (index, value) => {
    const newDates = [...dates];
    newDates[index] = value;
    setDates(newDates);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/tracker/save', { email, dates });
      const response = await axios.post('http://localhost:5000/tracker/predict', { dates });
      setPredictedDate(response.data.predicted_date);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="tracker-container">
      <div className="tracker-box">
        <h2>SheSync Period Tracker</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="tracker-input"
        />

        {dates.map((date, idx) => (
          <div key={idx} className="date-group">
            <label>Period Date {idx + 1}</label>
            <input
              type="date"
              value={date}
              onChange={e => handleChange(idx, e.target.value)}
              className="tracker-input"
            />
          </div>
        ))}

        <button onClick={handleSubmit} className="tracker-button">
          Predict Next Period
        </button>

        {predictedDate && (
          <div className="result-box">
            <p>Predicted Start Date:</p>
            <strong>{predictedDate}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tracker;
