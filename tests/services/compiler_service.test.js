const compilerService = require('../../src/services/');

describe('compiler_service tests', () => {

    //inicializate the compiler service before each test
    let compiler;
    beforeEach(() => {
        compiler = new compilerService();
    });


    it('should return a right response from java compiler', async () => {
        const path_java = 'D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\services\\compilers\\temp_saved_files\\Example.java';

        const resp = await compiler.run(path_java, 'java', '1.8');

        const expectedResp = {
            "stdout": "Hello Java!",
            "stderr": ""
        };
        expect(resp).toEqual(expectedResp);
    });

    it('should return a wrong response from java compiler', async () => {
        const path_java = 'D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\services\\compilers\\temp_saved_files\\Example.java';

        const expectedResp = 'Version not found';
        await expect(compiler.run(path_java, 'java', '1.9')).rejects.toThrow(expectedResp);
    });
});