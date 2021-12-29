import ProdutosService from "../services/ProdutosService";

const getAll = async () => {
  const result = await ProdutosService.getAll();

  if (result.path) return {
    err: result,
  };

  return {
    result,
  };
};

const getById = async (_, { id }) => {
  const result = await ProdutosService.getById(id);

  if (result.path) return {
    err: result,
  };

  return result;
};

const create = async (_, { produto }) => {
  const result = await ProdutosService.create(produto);

  if (result.path) return {
    err: result,
  };

  return result;
};

const updateById = async (_, { id, dados }) => {
  const result = await ProdutosService.updateById(id, dados);

  if (result.path) return {
    err: result,
  };

  return result;
};

const deleteById = async (_, { id }) => {
  await ProdutosService.deleteById(id);
  return `Produto de ID: ${id} deletado.`
};

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
