const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Player route');
});

module.exports = router;
