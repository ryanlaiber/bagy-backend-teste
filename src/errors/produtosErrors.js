const nomeError = {
  path: 'nome',
  message: 'Necessário inserir um nome válido',
};

const imagemError = {
  path: 'imagem',
  message: 'Necessário inserir uma caminho de imagem',
};

const descricaoError = {
  path: 'descricao',
  message: 'Necessário inserir uma descrição',
};

const pesoError = {
  path: 'peso',
  message: 'Necessário inserir um peso válido',
};

const precoError = {
  path: 'preco',
  message: 'Necessário inserir um preço válido',
};

const estoqueError = {
  path: 'estoque',
  message: 'Necessário inserir um estoque válido',
};

const nomeUnicoError = {
  path: 'nome',
  message: 'Necessário inserir nome único',
};

const naoEncontradoError = {
  path: 'id',
  message: 'Produto não encontrado',
};

export default {
  nomeError,
  imagemError,
  descricaoError,
  pesoError,
  precoError,
  estoqueError,
  nomeUnicoError,
  naoEncontradoError,
};
