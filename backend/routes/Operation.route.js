const { addition, substraction , getallhistory } = require('../controller/Operation.controller');
const express = require('express');

const router = express.Router();

router.post('/add', addition)
router.post('/sub', substraction)

router.get('/getallhistory',getallhistory)
module.exports = router