const { exec } = require('child_process');
const { resolve } = require('path');
const { stdout, stderr } = require('process');
const { spawn } = require('child_process');
const { execFile } = require('child_process');

class javaCompiler {
//#file
//#type
    constructor(file,type){
    /*    this.#file=file;
        this.#type=type;*/
    }

run(filePath) {
    try {
    const command=`java ${filePath}`;
    return new Promise((resolve, reject) => {
        exec(command,(err, stdout, stderr) => {
                if(err) {
                    console.info('error: '+err);
                } else {
                resolve({stdout});
                }
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al compilar archivo java',
            error
        });
    }
}
}
module.exports = javaCompiler