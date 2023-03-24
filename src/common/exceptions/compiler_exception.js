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

    get progLang () {
        return this.progLang;
    }

    get getErrorCode () {
        return this.errorCode;
    }
}

module.exports = CompilerException;
