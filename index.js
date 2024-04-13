const express = require('express');
const bodyParser = require('body-parser');
const heartRoutes = require('./routes/heart');
const kidneyRoutes = require('./routes/kidney');
// const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Routes
// app.use('/heart', authMiddleware, heartRoutes);
// app.use('/kidney', authMiddleware, kidneyRoutes);
app.use('/heart',heartRoutes);
app.use('/kidney',kidneyRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
