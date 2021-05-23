const multer = require('multer');
const path = require('path');

function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

// const storageEngine = multer.diskStorage({
//   destination: './src/assets/img/account',
//   filename: function (req, file, fn) {
//     fn(null, new Date().getTime().toString() + '-' + file.fieldname + path.extname(file.originalname));
//   }
// });

const storageEngine = multer.diskStorage({
    destination: './storage/img/user',
    filename: function (req, file, fn) {
        fn(null, new Date().getTime().toString() + makeid(10) + path.extname(file.originalname));
    }
});

const uploadPhoto = multer({
    storage: storageEngine,
    limits: {
        fileSize: 2000000000,
    },
    fileFilter: function (req, file, callback) {
        validateFile(file, callback);
    }
}).array("Image", 100);

var validateFile = function (file, cb) {
    allowedFileTypes = /jpeg|jpg|png|gif|mp3|mp4|pdf/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
        return cb(null, true);
    } else {
        cb({message:`Invalid file type. Only JPEG, PNG and GIF file are allowed.`})
    }
}

const userUploadImage = (req, res, next) => {
    uploadPhoto(req, res, (error) => {
        if (error) {
            console.log(error)
            return res.json({ error: error.message })
        } else {
            console.log(req.files)
            console.log(req.body)
            return res.json({ message: "Success!" })
        }
    })
}

module.exports = {
    userUploadImage
}