const Compiler = require('../compiler.js');

class JavaScriptCompiler extends Compiler{

    #compile_and_execute = 'node';

    constructor(){
        super('node','.js');
    }

    async compileRead(file_path){
       
        const command = `${this.#compile_and_execute} ${file_path}`;
        console.info(command + 'JavasScriptCompiler compileRead')
        return await this.executeCommand(command, (stdout, stderr) => {
            return {stdout, stderr};
        });
    }

    async run(file_path){
        console.info('JavascriptCompiler run')
        return await this.compileRead(file_path);
    }
}

module.exports = JavaScriptCompiler;