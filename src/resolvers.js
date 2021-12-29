import ClientesController from './controllers/ClientesController';
import ProdutosController from './controllers/ProdutosController';
import PedidosController from './controllers/PedidosController';

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
    __resolveType(produtos) {
      if (produtos.err) return 'objErr';
      return 'Produtos';
    }
  },

  ProdutoIdResult: {
    __resolveType(produto) {
      if (produto.err) return 'objErr';
      return 'Produto';
    }
  },

  PedidosResult: {
    __resolveType(pedidos) {
      if (pedidos.err) return 'objErr';
      return 'Pedidos';
    }
  },

  PedidoIdResult: {
    __resolveType(pedido) {
      if (pedido.err) return 'objErr';
      return 'Pedido';
    }
  },

  ResumoPedidoResult: {
    __resolveType(resumo) {
      if (resumo.err) return 'objErr';
      return 'ResumoPedido';
    }
  },

  PedidoCriadoResult: {
    __resolveType(pedido) {
      if (pedido.err) return 'objErr';
      return 'PedidoCriado';
    }
  },

  Query: {
    clientes: ClientesController.getAll,
    cliente: ClientesController.getById,
    produtos: ProdutosController.getAll,
    produto: ProdutosController.getById,
    pedidos: PedidosController.getAll,
    pedido: PedidosController.getById,
    resumoPedido: PedidosController.getResumoById,
  },

  Mutation: {
    createCliente: ClientesController.create,
    updateCliente: ClientesController.updateById,
    deleteCliente: ClientesController.deleteById,
    createProduto: ProdutosController.create,
    updateProduto: ProdutosController.updateById,
    deleteProduto: ProdutosController.deleteById,
    createPedido: PedidosController.create,
    updatePedido: PedidosController.updateById,
    deletePedido: PedidosController.deleteById,
  },
}

export default resolvers;