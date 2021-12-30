import { GraphQLServer } from 'graphql-yoga';
import { openDb } from './dataBase/dbConfig';
import dotenv from 'dotenv';
import path from 'path';
import resolvers from './resolvers';

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
});

const startServer = async () => {
  const db = await openDb();
  await db.migrate({ migrationsPath: './src/dataBase/migrations' });
  await server .start({ port: PORT }, () => console.log(`Server inicializado na porta ${PORT}`));
};

startServer();
