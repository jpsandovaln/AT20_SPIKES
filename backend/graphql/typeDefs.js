
//import {gql} from 'graphql-tag'
import { gql } from "apollo-server-express";

export const typeDefs = gql`
    scalar Upload
    type Query{
        users: [User]
        user(_id: ID): User
        role(_id: ID): Role
        roles: [Role]
       
    }
    type Mutation {
        createRole(
            name: String): Role
        createUser(
            name: String,
            phone: String, 
            email: String, 
            firstPassword: String,
            roleId: ID
            ): User
        updateRole
        (_id: ID,
            name: String
            ): Role
        updateUser(
            _id: ID,
            globalID:String,
            name: String,
            email: String,
            roleId: ID
            ):User
        deleteRole(
            _id: ID
            ): Role
        deleteUser(
            _id: ID
            ): User
        singleUpload(
            file: Upload
            ): String
        login(
            loginData: String,
            password: String
            ): String
        addPersonalInfo(
            globalID: String
            firstName: String,
            lastName: String,
            country: String,
            city: String,
            age: String,
        ):perInfo
    }
    type Role {
        _id: ID
        name: String
        createdAt: String
        updatedAt: String
        users: [User]
    }
    type perInfo {
        _id: ID
        globalID: String
        firstName: String
        lastName: String
        country: String
        city: String
        age: String
    }
    type User {
        _id: ID
        globalID: String
        name: String
        phone: String
        email: String
        createdAt: String
        updatedAt: String
        role: Role
        personalInfo: perInfo
    }
    type Info {
        Message: String, 
        Data: String
    }
`