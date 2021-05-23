const {userUploadImage} = require('../service/user.service')

const userUploadImageController = (req,res,next)=>{
    return userUploadImage(req,res,next)
}

module.exports = {
    userUploadImageController
}