/*
* @compiler_exception.js Copyright(c) 2023 Jalasoft
* 2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
* Av.General Inofuentes esquina Calle20, Edificio Union No1376, La Paz, Bolivia
* All rights reserved
* This software is the confidential and proprietary information of
* Jalasoft,ConfidentialInformation"). You shall not
* disclose such Confidential Information and shall use it only in
* accordance with the terms of the license agreement you entered into
* with Jalasoft
*/
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

    get getprogLang () {
        return this.progLang;
    }

    get getErrorCode () {
        return this.errorCode;
    }
}

module.exports = CompilerException;
