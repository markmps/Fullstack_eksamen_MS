import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import typeDefs from './graphql_schemas';
import http from 'http';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()
const DB = process.env.DB_CONNECTION_STRING!;
const PORT = 4000
const app = express();


const httpServer = http.createServer(app);
const server = new ApolloServer({ 
    typeDefs, 
    resolvers: { 
        Query,
        Mutation,
        
     },
     plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer })
    ], // Ensuring server is not kept alive
    });

await server.start();

app.use('/graphql', 
cors<cors.CorsRequest>(),
express.json(),
expressMiddleware(server, {
  context: async() => ({

    })},
    )
);

await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));

console.log(`GraphQL Server listening at http://localhost:${PORT}/graphql`);

app.get('*', function(req, res){
    res.send({ status: 404, message: 'Ressource not found' });
    });

mongoose
.set('strictQuery', false)
.connect(DB)
.then(() => {
    console.log('DB connection successful!');
});