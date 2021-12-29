import PedidosService from "../services/PedidosService";

const getAll = async () => {
  const result = await PedidosService.getAll();

  if (result.path) return {
    err: result,
  };

  return {
    result,
  };
};

const getById = async (_, { id }) => {
  const result = await PedidosService.getById(id);

  if (result.path) return {
    err: result,
  };

  return result;
};

const getResumoById = async (_, { id }) => {
  const result = await PedidosService.getResumoById(id);

  if (result.path) return {
    err: result,
  };

  return result;
};

const create = async (_, { pedido, produtos }) => {

  const result = await PedidosService.create(pedido, produtos.produtos);

  if (result.path) return {
    err: result,
  };

  return result;
};

const updateById = async (_, { id, dados }) => {
  const result = await PedidosService.updateById(id, dados);

  if (result.path) return {
    err: result,
  };

  return result;
};

const deleteById = async (_, { id }) => {
  await PedidosService.deleteById(id);
  return `Pedido de ID: ${id} deletado.`
};

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getResumoById,
};
