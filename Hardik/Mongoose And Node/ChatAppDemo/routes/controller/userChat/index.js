var express = require('express');
const { HttpError } = require('http-errors');
var router = express.Router();

const userchatcontroller = require('./userchatcontroller');

router.use("/", userchatcontroller);

module.exports = router;