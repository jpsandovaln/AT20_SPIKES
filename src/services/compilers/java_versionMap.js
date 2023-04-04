/**
@node_command.jsCopyright ( 2023 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft, Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
**/

const path = require('path');

// Builds a map to find the routes of each version ejecutable
const VERSIONES = {
    // '1.7': '../../thirdparties/java_versions/1.7/javac.exe', + '..\\..\\thirdparties\\java_versions\\1.7\\javac.exe'
    // '1.7': path.normalize(__dirname + '..\\..\\..\\thirdparties\\java_versions\\1.7\\java.exe'),
    '1.7': {
        // 'javac': path.normalize('C:\\Java\\jdk1.7.0_80\\bin\\javac.exe'),
        // 'java': path.normalize('C:\\Java\\jdk1.7.0_80\\bin\\java.exe'),
        'javac': path.normalize('D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\thirdparties\\Java\\jdk1.7.0_80\\bin\\javac.exe'),
        'java': path.normalize('D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\thirdparties\\Java\\jdk1.7.0_80\\bin\\java.exe'),
    },
    '1.8': {
        'javac': path.normalize('D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\thirdparties\\Java\\jdk1.8.0_202\\bin\\javac.exe'),
        'java': path.normalize('D:\\Charles\\JalaCapacitacion\\Progra101\\at20\\develop_\\AT20_COMPILER_SERVICE\\src\\thirdparties\\Java\\jdk1.8.0_202\\bin\\java.exe'),
    },
}
module.exports = VERSIONES;
