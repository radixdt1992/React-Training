var express = require('express');
const { HttpError } = require('http-errors');
var router = express.Router();

const registrationcontroller = require('./registrationcontroller');

router.use("/", registrationcontroller);

module.exports = router;