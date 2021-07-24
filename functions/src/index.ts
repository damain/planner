import * as  functions  from "firebase-functions";
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './typeDefs'
import resolvers from './resolvers'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const app = express() 
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
    context: ({req})=>{
        return {
            headers: req.headers
        }
    }
})
const start = async ()=>{
    await server.start()
    server.applyMiddleware({app})
}

start()

app.listen({ port: 4004 }, () => {
    console.log("Server has started 🚀 http://localhost:4004/graphql");
    });
exports.graphql = functions.https.onRequest(app)