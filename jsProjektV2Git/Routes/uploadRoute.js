const {getRequest, postRequest} = require('../Controllers/uploadController')

const pictureUpload = require('../Utils/multer')

const router = require('express').Router()
//Feltőltás függőségek: multer, és a router

router.get('/', getRequest)
router.post('/', pictureUpload.single("kep"), postRequest)

module.exports = router;
