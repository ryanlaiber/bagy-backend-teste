import { GraphQLServer } from 'graphql-yoga';
import { openDb } from './dataBase/dbConfig';
import path from 'path';
import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
});

const startServer = async () => {
  const db = await openDb();
  await db.migrate({ migrationsPath: './src/dataBase/migrations' });
  await server .start({ port: 4000 }, () => console.log('Server inicializado na porta 4000'));
};

startServer();
