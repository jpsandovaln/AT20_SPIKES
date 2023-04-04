const JavaCompiler = require('../../../src/services/compilers/java_compiler');

describe('Java compiler tests', () => {
    it('should return a right response from java compiler: execution function', async () => {
        const path_java = 'D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\services\\compilers\\temp_saved_files\\Example.java';

        const javaCompiler = new JavaCompiler();
        const resp = await javaCompiler.execution(path_java, '1.8');
        const expectedResp = {
            "stdout": "Hello Java!",
            "stderr": ""
        };
        expect(resp).toEqual(expectedResp);
    });

    it('should return a wrong response from java compiler: execution function', async () => {
        const path_java = 'D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\services\\compilers\\temp_saved_files\\Example.java';

        const javaCompiler = new JavaCompiler();

        await expect(javaCompiler.execution(path_java, '1.9')).rejects.toThrow();
    });

    it('should return a right response from java compiler: interpret function', async () => {
        const path_java = 'D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\services\\compilers\\temp_saved_files\\Example.java';

        const javaCompiler = new JavaCompiler();
        const resp = await javaCompiler.interpret(path_java, '1.8');
        const expectedResp = {
            "stdout": "",
            "stderr": ""
        };
        expect(resp).toEqual(expectedResp);
    });

    it('should return a wrong response from java compiler: interpret function', async () => {
        const path_java = 'D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\services\\compilers\\temp_saved_files\\Example.java';

        const javaCompiler = new JavaCompiler();

        await expect(javaCompiler.interpret(path_java, '1.9')).rejects.toThrow();
    });

    it('should return a right response from java compiler: run function', async () => {
        const path_java = 'D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\services\\compilers\\temp_saved_files\\Example.java';

        const javaCompiler = new JavaCompiler();
        const resp = await javaCompiler.run(path_java, '1.8');
        const expectedResp = {
            "stdout": "Hello Java!",
            "stderr": ""
        };
        expect(resp).toEqual(expectedResp);
    });

    it('should return a wrong response from java compiler: run function', async () => {
        const path_java = 'D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\services\\compilers\\temp_saved_files\\Example.java';

        const javaCompiler = new JavaCompiler();

        await expect(javaCompiler.run(path_java, '1.9')).rejects.toThrow();
    });
});