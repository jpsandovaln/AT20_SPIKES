const express = require('express');
const dotenv = require('dotenv');
const upload = require('./src/routes/upload');
const user = require('./src/routes/user');

const app = express();
dotenv.config();

app.get('/api/v1/', (req, res) => {
    res.send('hello world');
});
//routes
app.use('/api/v1/upload', upload);
app.use('/api/v1/user', user);

const port = process.env.PORT || 9090;
app.listen(port, () => {
    console.log('The app is online');
});