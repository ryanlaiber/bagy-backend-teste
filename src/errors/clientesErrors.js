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

module.exports = {
  nomeError,
  cpfError,
  dataNascError,
};
