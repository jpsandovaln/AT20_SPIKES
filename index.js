const express = require('express');
const dotenv = require('dotenv');

const compiler = require('./src/routes/compiler_routes.js');


const app = express();

dotenv.config();


app.use('/api/v1.0/compiler', compiler)


const PORT = process.env.PORT || 9292;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
