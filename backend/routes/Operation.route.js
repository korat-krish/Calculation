const { addition, substraction } = require('../controller/Operation.controller');
const express = require('express');

const router = express.Router();

router.post('/add', addition)
router.post('/sub', substraction)
module.exports = router