const loggerService = require('../../../loggerService');
const Compiler = require('../compiler');
const VERSIONES = require('./java_versionMap');
const path = require('path');

class JavaCompiler extends Compiler{

    // #compile_and_execute_command = 'java';

    // constructor(){
    //     super('java','.java');
    // }

    // async compileAndRead(file_path){
    //     const command = `${this.#compile_and_execute_command} ${file_path}`;

    //     return await this.executeCommand(command, (stdout, stderr) => {
    //         return {stdout, stderr};
    //     });
    // }

    // async run(file_path){
    //     return await this.compileAndRead(file_path);
    // }
    #interpreter_command;

    constructor() {
        super('java','.java');
    }

    async execution(file_path,version) {
        this.#interpreter_command = VERSIONES [version];
        if (!this.#interpreter_command) {
            const error = new Error('Version not found');
            loggerService.error(error);
            throw error;
        }

        let file_path_aux = file_path.split('/');
        const file = file_path_aux[file_path_aux.length-1];
        file_path = file.split('.java')[0];
        const command = `${this.#interpreter_command.java} -cp ${__dirname + '/temp_saved_files'} ${file_path}`;

        return await this.executeCommand(command, (stdout, stderr) => {
            return {stdout, stderr};
        });
    }

    async interpret(file_path,version){
        this.#interpreter_command = VERSIONES [version];
        if (!this.#interpreter_command) {
            const error = new Error('Version not found');
            loggerService.error(error);
            throw error;
        }

        const command = `${this.#interpreter_command.javac} ${file_path}`;

        return await this.executeCommand(command, (stdout, stderr) => {
            return {stdout, stderr};
        });

    }

    async run(file_path, version){
        await this.interpret(file_path, version);
        return await this.execution(file_path, version);
    }
}

module.exports = JavaCompiler;