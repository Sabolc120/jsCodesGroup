const getRequest = require('../Controllers/editController')
const router = require('express').Router();

router.get("/:id", getRequest);

module.exports = router;