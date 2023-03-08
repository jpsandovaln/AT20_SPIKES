const express = require('express');
const router = express.Router();
const CompilerController = require('../../controllers/compiler_controllers/Compiler_java_controller')


const compiler = new CompilerController();
router.get('/java',compiler.get);





module.exports = router;