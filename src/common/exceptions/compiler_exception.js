class CompilerException extends Error {
    constructor (message, status, errorCode, progLang) {
        super(message);
        this.status = status;
        this.errorCode = errorCode;
        this.progLang = progLang;
    }

    get getStatus () {
        return this.status;
    }

    get getErrorCode () {
        return this.errorCode;
    }

    get progLang () {
        return this.progLang;
    }
}

module.exports = CompilerException;
