/*
@RoleModel.js
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

// const roleSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     }
// })
// export default mongoose.model("Role", roleSchema);
//Create rol schema
const RoleSchema = new mongoose.Schema (
    {
        role:{
            type: String,
            unique: true
        },
        description:{
            type: String,
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

export default mongoose.model("Role", RoleSchema);