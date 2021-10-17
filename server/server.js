const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/v1/restaurants', require('./routes/restaurants'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and listening on ${PORT}.`);
});
