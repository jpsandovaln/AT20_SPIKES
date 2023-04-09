import { gql } from '@apollo/client'

export const CREATE_USER = gql`
mutation($name: String, $phone: String, $email: String,$firstPassword: String, $roleId: ID){
  createUser (name: $name, phone: $phone, email: $email,firstPassword: $firstPassword, roleId: $roleId){
    _id
    globalID
    name
    role {
      _id
      name
    }
  }
}
`


export const LOGIN = gql`
mutation($loginData: String, $password: String){
  login (loginData: $loginData, password: $password) 
}
`

export const GET_USERS = gql`
{
  users {
    _id
    globalID
    name
    phone
    email
    role {
      _id
      name
    }
  }
}
`
export const GET_USER = gql`
{
  user {
    _id
    name
    phone
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