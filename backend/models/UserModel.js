/*
@UserModeljs
Copyright ( 2021 Jalasoft 2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft, Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
*/

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    globalID: {
        type: String,      
        },
    name:{
        type: String,
        required: true
        },
    phone: {
        type: String,
        required: true
        },
    email:{
        type: String,
        },
    firstPassword: {
        type: String,
        },
    password: {
        type: String,
        },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
        },
    personalInfo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PersonalInfo'
        }
    
    },
    {
        timestamps: true,
        versionKey:false
    }
);

// export default mongoose.model('User', UserSchema);

// const UserSchema = new mongoose.Schema (
//     {
//         globalID: {
//             type: String,
//             required: true
//         },
//         name:{
//             type: String,
//             required: true
//         },
//         phone: {
//             type: String,
//         },
//         email:{
//             type: String,
//             unique: true,
//             required: true
//         },
//         firstPassword: {
//             type: String,
//         },
//         password: {
//             type: String,
//         },
//         roleId:{
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Role',
//             required: true
//         },
//         personalInfo:{
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'PersonalInfo'
//         }
//     },
//     {
//         timestamps:true,
//         versionKey:false
//     }
// );
export default mongoose.model('User', UserSchema);

