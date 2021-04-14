var express = require('express');
const { HttpError } = require('http-errors');
var router = express.Router();

const signupcontroller = require('./signupcontroller');

router.use("/", signupcontroller);

module.exports = router;