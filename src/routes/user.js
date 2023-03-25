const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
    const params = req.params.name;
    res.send('hello ' + params);
});

router.post('/name', (req, res) => {
    const name = req.body;
    res.send('hello ' + name);
});

module.exports = router;
