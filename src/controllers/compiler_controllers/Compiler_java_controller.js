const javaCompiler = require('../../service/compiler/javaCompiler');
class CompilerController {
    async get(req, res) {
        const extract=new javaCompiler();
        const file = 'C:/at.jala/at_20_P1/src/service/compiler/hello.java';
        const result = await extract.run(file);
      res.send(result)
    }
}
module.exports = CompilerController;