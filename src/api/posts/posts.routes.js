//routes = регулировчик

const express = require("express");
const router = express.Router();
const controller = require('./posts.controller');

router.post('/', controller.newPost);
router.get('/:id', controller.getPost);
router.post('/:id/comment', controller.createComment);
router.get('/', controller.getAllPosts);
module.exports = router;