const exClientes = require('../mocClientes');

module.exports = {
  Query: {
    clientes: () => exClientes,
    cliente: (_, { id }) => exClientes.find(e => e.id.toString() === id),
  },

  Mutation: {
    createCliente: () => {},
  },
}