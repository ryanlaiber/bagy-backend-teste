import ProdutosModel from '../models/ProdutosModel';
import Error from '../errors/produtosErrors';
import mocs from '../../mocs';

const validate = async (metodo, {
  nome, imagem, descricao, peso, preco, estoque
}, id = 0) => {
  if (metodo === 'create') {
    const checkNome = await ProdutosModel.getByNome(nome);
    if (checkNome) return Error.nomeUnicoError;
  } else if (metodo === 'update') {
    const checkNome = await ProdutosModel.getByNome(nome);
    if (checkNome.id !== id) return Error.nomeUnicoError;
  };
  switch (false) {
    case (nome):
      return Error.nomeError;
    case (imagem):
      return Error.imagemError;
    case (descricao):
      return Error.descricaoError;
    case (peso >= 0):
      return Error.pesoError;
    case (preco > 0):
      return Error.precoError;
    case (estoque >= 0):
      return Error.estoqueError;
    default:
      return false;
  };
};

const create = async (produto) => {
  const {
    nome,
    imagem,
    descricao,
    peso,
    preco,
    estoque,
  } = produto;
  const notValid = await validate('create', produto);
  if (notValid) return notValid;

  const id = await ProdutosModel.create(produto);

  if (id) return {
    id,
    nome,
    imagem,
    descricao,
    peso,
    preco,
    estoque,
  };
};

const deleteById = async (id) => {
  await ProdutosModel.deleteById(id);
};

const updateById = async (id, produto) => {
  const {
    nome,
    imagem,
    descricao,
    peso,
    preco,
    estoque,
  } = produto;
  const notValid = await validate('update', produto, id);
  if (notValid) return notValid;

  await ProdutosModel.updateById(id, produto);

  return {
    id,
    nome,
    imagem,
    descricao,
    peso,
    preco,
    estoque,
  };
};

const getById = async (id) => {
  const produto = await ProdutosModel.getById(id);

  if (produto) return produto;

  return Error.naoEncontradoError;
};

const getAll = async () => {
  const produtos = await ProdutosModel.getAll();

  if (produtos.length !== 0) return produtos;

  return {
    path: 'produtos',
    message: 'Ainda não existem produtos cadastrados',
  };
}

export default {
  create,
  deleteById,
  updateById,
  getById,
  getAll,
};
