const Compiler = require('../../compiler.js');
const VERSIONES = require('./python_versionMap.js');

class PythonCompiler extends Compiler {

    #interpreter_command;

    constructor() {
        super('python','.py');
    }

    async interpret(file_path,version){
        this.#interpreter_command = VERSIONES [version]
        if (!this.#interpreter_command) {
            throw new Error('Version not found');
        }
        const command = `${this.#interpreter_command} ${file_path}`;

        return await this.executeCommand(command, (stdout, stderr) => {
            return {stdout, stderr};
        });

    }

    async run(file_path, version){
        return await this.interpret(file_path, version);
    }

}

module.exports = PythonCompiler;
