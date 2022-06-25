const {getRequest, postRequest} = require('../Controllers/refreshController')

const router = require('express').Router()

router.get('/:id', getRequest)
router.post("/", postRequest)

module.exports = router;