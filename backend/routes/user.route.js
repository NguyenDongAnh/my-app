const express = require("express");
const router = express.Router();
const auth = require("../controllers/user.controller");

const {
    userUploadImageController
} = require("../controllers/user.controller");

router.post("/upload", userUploadImageController);

module.exports = router;