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

const dotenv = require('dotenv');
dotenv.config();

// Builds a map to find the routes of each version ejecutable
const VERSIONES = {    
    '1.7': {        
        'javac': process.env.JAVAC_1_7,
        'java': process.env.JAVA_1_7,
    },
    '1.8': {
        'javac': process.env.JAVAC_1_8,
        'java': process.env.JAVA_1_8,
    },
    '11': {
        'javac': process.env.JAVAC_11,
        'java': process.env.JAVA_11,
    },
    '17': {
        'javac': process.env.JAVAC_17,
        'java': process.env.JAVA_17,
    },
}
module.exports = VERSIONES;
