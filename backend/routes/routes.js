var express= require('express')
var router = express.Router();

// router.use('/auth',require('./auth.route'));
router.use('/user',require('./user.route'));

module.exports = router