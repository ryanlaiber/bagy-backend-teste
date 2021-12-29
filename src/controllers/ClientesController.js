import ClientesService from '../services/ClientesService';

const getAll = async () => {
  const result = await ClientesService.getAll();

  if (result.path) return {
    err: result,
  };

  return {
    result,
  };
};

const getById = async (_, { id }) => {
  const result = await ClientesService.getById(id);

  if (result.path) return {
    err: result,
  };

  return result;
}

const create = async (_, { cliente }) => {
  const result = await ClientesService.create(cliente);

  if (result.path) return {
    err: result,
  };

  return result;
};

const updateById = async (_, { id, dados }) => {
  const result = await ClientesService.updateById(id, dados);

  if (result.path) return {
    err: result,
  };

  return result;
};

const deleteById = async (_, { id }) => {
  await ClientesService.deleteById(id);
  return `Cliente de ID: ${id} deletado.`
};

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}