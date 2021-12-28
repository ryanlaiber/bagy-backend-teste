const nomeError = {
  path: 'nome',
  message: 'Necessário inserir nome do cliente'
};

const cpfError = {
  path: 'cpf',
  message: 'CPF inválido'
};

const dataNascError = {
  path: 'dataNasc',
  message: 'Necessário inserir data de nascimento '
};

const emailError = {
  path: 'email',
  message: 'Necessário inserir email válido'
};

const emailUnicoError = {
  path: 'email',
  message: 'Email já cadastrado'
};

const ruaError = {
  path: 'rua',
  message: 'Necessário inserir rua'
};

const bairroError = {
  path: 'bairro',
  message: 'Necessário inserir bairro'
};

const cepError = {
  path: 'cep',
  message: 'Necessário inserir cep'
};

const paisError = {
  path: 'pais',
  message: 'Necessário inserir país'
};

const estadoError = {
  path: 'estado',
  message: 'Necessário inserir estado'
};

const cidadeError = {
  path: 'cidade',
  message: 'Necessário inserir cidade'
};

const numeroError = {
  path: 'numero',
  message: 'Necessário inserir número'
};

const naoEncontradoError = {
  path: 'id',
  message: 'Cliente não encontrado'
}

export default {
  nomeError,
  cpfError,
  dataNascError,
  emailError,
  ruaError,
  bairroError,
  cepError,
  cidadeError,
  numeroError,
  estadoError,
  paisError,
  emailUnicoError,
  naoEncontradoError,
};
