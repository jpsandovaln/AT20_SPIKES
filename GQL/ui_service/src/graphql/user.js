import { gql } from '@apollo/client'

export const CREATE_USER = gql`
mutation($name: String, $email: String, $roleId: ID){
  createUser (name: $name, email: $email, roleId: $roleId){
    _id
    name
    role {
      _id
      name
    }
  }
}
`

export const GET_USERS = gql`
{
  users {
    _id
    name
    email
    role {
      _id
      name
    }
  }
}
`

export const DELETE_USER = gql`
mutation($id: ID) {
  deleteUser (_id: $id){
    _id
    name
  }
}
`