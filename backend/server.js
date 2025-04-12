const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');

const productRoutes = require('./routes/products');
const trackerRoutes = require('./routes/trackerRoutes');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/tracker', trackerRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
