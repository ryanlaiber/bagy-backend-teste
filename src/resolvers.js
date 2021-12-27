import mocs from '../mocs';

const resolvers = {
  ClienteResult: {
    __resolveType(cliente) {
      if (cliente.path) return 'Error';
      return 'Cliente';
    }
  },

  Query: {
    clientes: () => mocs.exClientes,
    cliente: (_, { id }) => {
      const result = mocs.exClientes.find(e => e.id.toString() === id);
      if (result) return result;
      return { path: "id", message: 'Cliente não encontrado' };
    },
  },

  Mutation: {
    createCliente: () => {},
  },
}

export default resolvers;