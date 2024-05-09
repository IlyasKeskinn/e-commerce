const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../frontend/public/img/images");
    },
    filename: function (req, file, cb) {
        filename = path.parse(file.originalname).name + "_" + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
        cb(null, filename)
    }
})

const upload = multer({storage : storage});

exports.upload = upload;


