//routes = регулировчик

const express = require("express");
const router = express.Router();
const controller = require('./posts.controller');

router.post('/', controller.newPost);
router.get('/:id', controller.getPost);
router.post('/:id/comment', controller.createComment);

module.exports = router;