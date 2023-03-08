const javaCompiler = require('../service/compiler/javaCompiler');


it('return java response', async() => {
    const file = 'C:/at.jala/at_20_P1/src/service/compiler/hello.java';
    const Compiler = new javaCompiler();
    const output = "Hello, World!\r\n";
  return Compiler.run(file).then(data => expect(data.stdout).toBe(output));
});
it('return java response', async() => {
    const file = 'C:/at.jala/at_20_P1/src/service/compiler/hello';
    const Compiler = new javaCompiler();
    const output = "Hello, World!\r\n";
  return Compiler.run(file).then(data => expect(data.stdout).toBe(output));
});
