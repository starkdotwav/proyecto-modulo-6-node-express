const express = require('express');
const {
  getHome,
  getStatus,
  getInfo
} = require('../controllers/homeController');

const router = express.Router();

router.get('/', getHome);
router.get('/status', getStatus);
router.get('/info', getInfo);

module.exports = router;
