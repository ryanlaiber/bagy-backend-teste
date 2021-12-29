const exClientes = [
  {
    id: 5,
    nome: 'Ryan Laiber',
    email: 'ryanlaiber@gmail.com',
    cpf: 15442311723,
    dataNasc: '27/10/1993',
    endereco: {
      rua: 'av cel antonio duarte',
      bairro: 'centro',
      cidade: 'iconha',
      estado: 'ES',
      pais: 'Brasil',
      cep: 29280000,
      numero: 'N/A',
    },
  },
  {
    id: 3,
    nome: 'Larissa',
    email: 'larissa@gmail.com',
    cpf: 123456798,
    dataNasc: '12/04/2003',
    endereco: {
      rua: 'rua alcides viana',
      bairro: 'centro',
      cidade: 'iconha',
      estado: 'ES',
      pais: 'Brasil',
      cep: 29280000,
      numero: 'N/A',
    },
  }
]

const exCliente = {
  nome: 'nome1', 
  email: 'teste1@email.com', 
  cpf: '15442311723', 
  dataNasc: '27/10/1993', 
  rua: 'rua teste', 
  bairro: 'bairro teste', 
  cidade: 'cidade teste', 
  estado: 'es', 
  pais: 'br', 
  cep: 29280000, 
  numero: 'N/A'
};

const exProduto = {
  nome: 'aviaozinho',
  imagem: 'https://linkimagem.com.br/imagem',
  descricao: 'descricao legal demais',
  peso: 100,
  preco: 59.90,
  estoque: 50,
};

const exPedido = {
  parcelas: 2,
  compradorId: 1,
  status: 'aprovado',
};

const exProdutos = [
  { quantidade: 1, id: 2 },
  { quantidade: 2, id: 1 }
];

const exHistoricoPedido = {
  quantidade: 20,
  pedidoId: 1,
  produtoId: 2,
};

export default {
  exClientes,
  exCliente,
  exPedido,
  exProduto,
  exHistoricoPedido,
  exProdutos,
};
