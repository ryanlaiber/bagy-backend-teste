import ProdutosModel from '../models/ProdutosModel';
import Error from '../errors/produtosErrors';
import mocs from '../../mocs';

const validate = async (metodo, {
  nome, imagem, descricao, peso, preco, estoque
}) => {
  if (metodo === 'create') {
    const checkNome = await ProdutosModel.getByNome(nome);
    if (checkNome) return Error.nomeUnicoError;
  }
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

const main = async () => {
  const result = await create(mocs.exProduto);
  console.log(result);
}
main();
