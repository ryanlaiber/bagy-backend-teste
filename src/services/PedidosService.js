import PedidosModel from '../models/PedidosModel';
import ClientesModel from '../models/ClientesModel';
import ProdutosModel from '../models/ProdutosModel';
import HistoricoPedidosModel from '../models/HistoricoPedidosModel';
import pedidoEmail from '../helpers/emailPedido';
import Error from '../errors/pedidosErrors';
import mocs from '../../mocs';

const validatePedido = async ({
  parcelas,
  compradorId,
  status,
}) => {
  const comprador = await ClientesModel.getById(compradorId);
  let checkCompradorId = false;
  if (comprador) {
    checkCompradorId = true;
  };
  switch (false) {
    case (parcelas >= 1):
      return Error.parcelasError;
    case (checkCompradorId):
      return Error.compradorIdError;
    case (status):
      return Error.statusError;
    default:
      return false;
  };
};

const validateProduto = async ({ quantidade, id }) => {
  const produto = await ProdutosModel.getById(id);
  if (!produto) return Error.naoExisteProdutoError;
  const novoEstoque = produto.estoque - quantidade;
  if (novoEstoque < 0) return Error.estoqueError;
  return false;
};



const create = async (pedido, produtos) => {
  const {
    parcelas,
    compradorId,
    status,
  } = pedido;

  const notValidPedido = await validatePedido(pedido);

  if (notValidPedido) return notValidPedido;

  const validateProdutos = await Promise.all(
    produtos.map(async(produto) => await validateProduto(produto))
  );
  const notValidProduto = validateProdutos.find((result) => result !== false);

  if (notValidProduto) return notValidProduto;
  const id = await PedidosModel.create(pedido);
  if (id) {
    for(let i = 0; i < produtos.length; i++) {
      console.log(id, produtos[i].quantidade, produtos[i].id, compradorId);
      await HistoricoPedidosModel.create({
        quantidade: produtos[i].quantidade,
        pedidoId: id,
        produtoId: produtos[i].id,
        compradorId,
      });
    };
    console.log('cheguei 2');
    const resumo = await PedidosModel.resumoPedido(id);
    const comprados = await Promise.all(
      produtos.map(async (e) => {
        const { nome, preco } = await ProdutosModel.getById(e.id);
        return {
          nome,
          quantidade: e.quantidade,
          preco,
        };
      })
    );

    pedidoEmail(resumo, comprados);

    return {
      id,
      parcelas,
      status,
      itens: comprados,
      total: resumo.montante,
    };
  };
};

const exProdutos = [
  { quantidade: 1, id: 2 },
  { quantidade: 2, id: 1 }
];

const main = async () => {
  const result = await create(mocs.exPedido, exProdutos);
  console.log(result);
}
main();
