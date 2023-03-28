const multer = require('multer');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

const uploadFile = multer({ storage });
exports.upload = uploadFile.single('File');

exports.uploadFileMessage = (req, res) => {
    res.send('Upload a file');
};
