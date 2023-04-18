import { ApolloServer, gql } from 'apollo-server'
import { v1 as uuid } from 'uuid'
import axios from 'axios';
import FormData from 'form-data';
import questions from '../mock/questionnariemock';

export const typeDefs = gql`

type Question {
    id: ID
  question: String
  test: String
  imgSrc: String
  type: String
  answer: String
  options: [Option]
}

type Option {
  value: String
  label: String
}

type QuestionObject {
    id: ID
  Question: String
  ImgScr: String
  IDTest: Int
  IDType: Int
  answer: String
  options: [OptionObject]
}

type OptionObject {
  Label: String
  Value: String
  ImgSrc: String
}

type Query {
    getQuestion: [Question]
    getQuestionCount: Int!
    getQuestions: [Question!]!
    getQuestionByID(id: ID!): QuestionObject
    getQuestionnaire(test: String!): Question!

},

type Mutation {
    createQuestion(
      question: String,
      test: String,
      imgSrc: String,
      type: String,
      answer: String,
      options: [OptionInput]
    ): Question
  },
  input OptionInput {
    value: String
    label: String
  }
`