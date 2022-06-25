const getRequest = require('../Controllers/mainController')

const router = require('express').Router();

router.get('/', getRequest)

module.exports = router;