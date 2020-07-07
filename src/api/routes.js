const express = require("express");
const router = express.Router();

router.use('/users/', require('./users/users.routes'));
router.use('/post/', require('./posts/posts.routes'));

module.exports = router;