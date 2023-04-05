import {gql} from 'graphql-tag'

export const typeDefs = gql`
    type Query{
        users: [User]
        user(_id: ID): User
        role(_id: ID): Role
        roles: [Role]
    }
    type Mutation {
        createRole(name: String): Role
        createUser(name: String, email: String, roleId: ID): User
        updateRole(_id: ID, name: String): Role
        updateUser(_id: ID, name: String, email: String, roleId: ID): User
        deleteRole(_id: ID): Role
        deleteUser(_id: ID): User
    }
    type Role {
        _id: ID
        name: String
        createdAt: String
        updatedAt: String
        users: [User]
    }
    type User {
        _id: ID
        name: String
        email: String
        createdAt: String
        updatedAt: String
        role: Role
    }
    
`