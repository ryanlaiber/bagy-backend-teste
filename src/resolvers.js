import ClientesController from './controllers/ClientesController';
import ProdutosController from './controllers/ProdutosController';

const resolvers = {
  ClientesResult: {
    __resolveType(clientes) {
      if (clientes.err) return 'objErr';
      return 'Clientes';
    }
  },

  ClienteIdResult: {
    __resolveType(cliente) {
      if (cliente.err) return 'objErr';
      return 'Cliente';
    }
  },

  ProdutosResult: {
    __resolveType(produto) {
      if (produto.err) return 'objErr';
      return 'Produtos';
    }
  },

  ProdutoIdResult: {
    __resolveType(produtos) {
      if (produtos.err) return 'objErr';
      return 'Produto';
    }
  },

  Query: {
    clientes: ClientesController.getAll,
    cliente: ClientesController.getById,
    produtos: ProdutosController.getAll,
    produto: ProdutosController.getById,
  },

  Mutation: {
    createCliente: ClientesController.create,
    updateCliente: ClientesController.updateById,
    deleteCliente: ClientesController.deleteById,
    createProduto: ProdutosController.create,
    updateProduto: ProdutosController.updateById,
    deleteProduto: ProdutosController.deleteById,
  },
}

export default resolvers;