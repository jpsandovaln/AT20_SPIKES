const express = require('express');
const middleware = require('../middlewares/upload');

const router = express.Router();

router.post(
    '/',
    middleware.upload,
    middleware.uploadFileMessage
)

router.get('/', (req, res) => {
    res.send('hello from upload route');
});

module.exports = router;