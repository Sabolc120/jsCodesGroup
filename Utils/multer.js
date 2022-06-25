const multer = require('multer')
//Multer: Egy olyan middleware ami főképpen fájlfeltöltésekre van használva
const fileStorageEngine = multer.diskStorage({
    //Mit nyisson meg a gombra kattintáskor
    destination: (req, file, cb) =>{
        cb(null, "public/kepek");
    },
    //Mi legyen a fájlneve, ez esetben az eredeti
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})
const pictureUpload = multer({ storage: fileStorageEngine });

module.exports = pictureUpload