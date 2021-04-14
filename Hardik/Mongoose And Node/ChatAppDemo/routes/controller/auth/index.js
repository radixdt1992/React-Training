var express = require('express');
const { HttpError } = require('http-errors');
var router = express.Router();

const authenticationController = require('./authenticationController');

router.use("/login", authenticationController);

module.exports = router;