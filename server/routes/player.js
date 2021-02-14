const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:name', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.hypixel.net/player?key=${process.env.HYPIXEL_KEY}&name=${req.params.name}`
    );
    res.status(200).json(response);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
