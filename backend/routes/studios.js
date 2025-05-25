const express = require('express');
const router = express.Router();
const studios = require('../data/studios.json');

router.get('/', (req, res) => {
  res.json(studios);
});

module.exports = router;
