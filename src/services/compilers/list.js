const JavaCompiler = require('./java_compiler.js');
const PythonCompiler = require('./python/python_compiler.js');
const CSharpCompiler = require('./cSharp_compiler.js');


const COMPILERS = [
    new JavaCompiler(),
    new PythonCompiler(),
    new CSharpCompiler()
]

module.exports = COMPILERS;