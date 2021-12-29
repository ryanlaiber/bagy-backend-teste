import ClientesController from './controllers/ClientesController';
// import mocs from '../mocs';

const resolvers = {
  ClienteResult: {
    __resolveType(cliente) {
      if (cliente.err) return 'objErr';
      return 'Clientes';
    }
  },

  ClienteIdResult: {
    __resolveType(cliente) {
      if (cliente.err) return 'objErr';
      return 'Cliente';
    }
  },

  Query: {
    clientes: ClientesController.getAll,
    cliente: ClientesController.getById,
  },

  Mutation: {
    createCliente: ClientesController.create,
    updateCliente: ClientesController.updateById,
    deleteCliente: ClientesController.deleteById,
  },
}

export default resolvers;