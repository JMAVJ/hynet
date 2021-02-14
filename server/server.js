const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv/config');

app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

// Load Routes
app.use('/player', require('./routes/player'));

app.get('/', (req, res) => {
  res.send('Ok');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
