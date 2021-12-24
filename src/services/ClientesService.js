const ClientesModel = require('../models/ClientesModel');
const Error = require('../errors/clientesErrors');
const validaCpf = require('../helpers/cpfValidate');

const validate  = ({
  nome,
  email,
  cpf,
  dataNasc,
  rua,
  bairro,
  cidade,
  estado,
  pais,
  cep,
  numero,
}) => {
  const dataRegex = new RegExp('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$');
  switch(true) {
    case (!nome):
      return Error.nomeError;
    case (!validaCpf(cpf.toString())):
      return Error.cpfError;
    case (!dataRegex.test(dataNasc)):
      return Error.dataNascError;
  }
}