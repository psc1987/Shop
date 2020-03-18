// 파일 업로드시 저장될 경로와 파일 이름을 설정

const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../uploads'));
    },
    filename: function(req, file, cb) {
        cb(null, new Date().getTime() + file.originalname);
    }
});

module.exports = multer({ storage });