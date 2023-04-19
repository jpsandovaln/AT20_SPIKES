import { ApolloServer, gql } from 'apollo-server'
import { v1 as uuid } from 'uuid'
import { questions } from '../mock/questionnariemock';
import axios from 'axios';
import FormData from 'form-data';


export const resolvers = {
    Query: {
        getQuestionCount: () => questions.length,
        async getQuestionnaire(_, { test }) {
          try {
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'http://localhost:9292/api/v1.0/compiler',
              headers: {
                ...data.getHeaders()
              },
              data : data
            };
            const form = new FormData();
            form.append('test', test);
            const questionnaire = response.data;
            return questionnaire;
          } catch (error) {
            throw new Error(error.message);
          }
        },
        getQuestion: () => questions,
        getQuestionByID: async (_, { id }) => {
            try {
              const response = await fetch(`http://localhost:8820/api/v1.0/question/${id}`);
              const question = await response.json();
              console.log(question)
              return question;
            } catch (error) {
              throw new Error(error.type);
            }
          },

    },
    Mutation: {
         /* console.log(question);
          try {
            const response = await axios.post('http://localhost:8820/api/v1.0/question/', {
              question,
              test,
              imgSrc,
              type,
              answer,
              options,
            });
           // console.log(response.data)
            return response.data;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to create question');
          }
        },*/
        async createQuestion(_, { question, test, imgSrc, type, answer, options }) {
            try {
              const response = await axios.post('http://localhost:8820/api/v1.0/question/', {
                question,
                test,
                imgSrc,
                type,
                answer,
                options,
              });
              console.log(response.data)
              return response.data;
            } catch (error) {
              console.error(error.response.data);
              throw new Error('Failed to create question');
            }
          },
      },
}