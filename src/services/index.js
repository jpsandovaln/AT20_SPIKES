const COMPILERS = require('./compilers/list.js');

class CompilationService {
    #compilers;

    constructor () {
        this.#compilers = COMPILERS;
    }

    async run (file_path, language) {
        const compiler = this.#compilers.find(compiler => compiler.language === language);
        if (!compiler) {
            throw new Error('Compiler not found');
        }

        return await compiler.run(file_path);
    }
}

module.exports = CompilationService;
