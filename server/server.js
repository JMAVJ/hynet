const express = require('express');

app = express();

// Load Routes
app.use('/player', require('./routes/player'));

app.get('/', (req, res) => {
  res.send('Ok');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
