import * as  functions  from "firebase-functions";
import {auth} from 'firebase-admin'
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';



function handleAwait<T>(promise: Promise<T>){
    return promise
        .then( result =>({ok: true, result}) )
        .catch( e =>({ok: false, result:e}) )
}
const app = express() 
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
    context: async({req})=>{
        //uncomment to bypass authentication checks
        return {headers: req.headers}
        
        const token = req.headers.authorization?.split(" ") || ""
        console.log(token[1])
        //get token from headers and verify users
        let decodedToken = await handleAwait(auth().verifyIdToken(token[1]))
        if (decodedToken.ok) {
            let userResult = await handleAwait(auth().getUser(decodedToken.result.uid))
            if (userResult.ok){
                return { user: userResult.result as auth.UserRecord }
            }
            return {error: new Error("User not found")}
        } else {
            return { error: new Error("User token not valid")}
        // throw new AuthenticationError("You must be logged in")
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