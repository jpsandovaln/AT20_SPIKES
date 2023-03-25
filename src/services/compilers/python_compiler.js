const Compiler = require('../compiler.js');

class PythonCompiler extends Compiler {
    #interpreter_command = 'py';

    constructor () {
        super('python', '.py');
    }

    async interpret (file_path) {
        const command = `${this.#interpreter_command} ${file_path}`;

        return await this.executeCommand(command, (stdout, stderr) => {
            return { stdout, stderr };
        });
    }

    async run (file_path) {
        return await this.interpret(file_path);
    }
}

module.exports = PythonCompiler;
