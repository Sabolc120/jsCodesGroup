const {getRequest, postRequest} = require('../Controllers/uploadController')

const router = require("express").Router()

router.get('/', getRequest)
router.post('/', postRequest)

module.exports = router;