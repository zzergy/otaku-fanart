//routes = регулировчик

const express = require("express");
const router = express.Router();
const controller = require('./posts.controller');

router.post('/', controller.newPost);

module.exports = router;