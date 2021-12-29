const naoEncontradoError = {
  path: 'id',
  message: 'Pedido não encontrado'
};

const parcelasError = {
  path: 'parcelas',
  message: 'Necessário inserir um numero válido de parcelas',
};

const compradorIdError = {
  path: 'compradorId',
  message: 'O cliente não existe',
};

const statusError = {
  path: 'status',
  message: 'Necessário inserir o status do pedido',
};

const naoExisteProdutoError = {
  path: 'produtoId',
  message: 'O produto não existe no estoque',
};

const estoqueError = {
  path: 'quantidade',
  message: 'O estoque não possui quantidade requerida',
};

export default {
  naoEncontradoError,
  parcelasError,
  compradorIdError,
  statusError,
  naoExisteProdutoError,
  estoqueError,
};
