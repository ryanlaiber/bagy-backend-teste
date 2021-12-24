const exClientes = require('../mocClientes');

module.exports = {
  ClienteResult: {
    __resolveType(cliente) {
      if (cliente.path) return 'Error';
      return 'Cliente';
    }
  },

  Query: {
    clientes: () => exClientes,
    cliente: (_, { id }) => {
      const result = exClientes.find(e => e.id.toString() === id);
      if (result) return result;
      return { path: "id", message: 'Cliente não encontrado' };
    },
  },

  Mutation: {
    createCliente: () => {},
  },
}