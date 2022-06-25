const {getRequest, deleteRequest} = require('../Controllers/mainController')

const router = require('express').Router();

router.get('/', getRequest)
router.get("/:id/:kepcim", deleteRequest);

module.exports = router;