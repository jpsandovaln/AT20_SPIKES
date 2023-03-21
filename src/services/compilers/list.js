const JavaCompiler = require('./java_compiler.js');
const PythonCompiler = require('./python_compiler.js');
const CSharpCompiler = require('./cSharp_compiler.js');
const JavaScriptCompiler = require('./javascript_compiler.js');


const COMPILERS = [
    new JavaCompiler(),
    new PythonCompiler(),
    new CSharpCompiler(),
    new JavaScriptCompiler()
]

module.exports = COMPILERS;