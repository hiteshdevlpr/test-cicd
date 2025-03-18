import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import _db from './_db.js';

const PORT = 4000;

const resolvers = {
    Query: {
        games() {
            return _db.games
        },
        authors() {
            return _db.games
        },
        reviews() {
            return _db.reviews
        }
    }
}
const server = new ApolloServer({
    typeDefs, // The schema
    resolvers // handler for incoming requests
});

const {url} = await startStandaloneServer(server, {
    listen: {port: PORT }
});

console.log('Server running on port:', PORT);

