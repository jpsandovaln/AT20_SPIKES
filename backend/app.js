import express from 'express';
import { ApolloServer } from 'apollo-server-express';//apollo-server-express
import { expressMiddleware } from '@apollo/server/express4';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs';
import cors  from 'cors';
import http from 'http';
const app = express();
export async function startApolloServer(typeDefs, resolvers){

        // const app = express();
        // const httpServer = http.createServer(app);

        // const server = new ApolloServer({
        //     typeDefs,
        //     resolvers,
        // });
        // await server.start();

        // app.use('/graphql', cors(), express.json(), expressMiddleware(server))

        // await new Promise(resolve => httpServer.listen({
        //     port: 4000,
        // }, resolve))
        // console.log("Server on port 4000");

    const server = new ApolloServer({  typeDefs, resolvers, });
    await server.start();
    app.use('/graphql', cors());
    app.use(graphqlUploadExpress());
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
  console.log( `Graphql server on port http://localhost:4000${server.graphqlPath}`);
});
}
