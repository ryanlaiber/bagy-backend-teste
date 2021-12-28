import ClientesModel from '../models/ClientesModel';
import Error from '../errors/clientesErrors';
import validaCpf from '../helpers/cpfValidate';

const validate  = async (metodo, {
  nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero,
}, id = 0) => {
  if (metodo === 'update') {
    const checkId = await ClientesModel.getById(id);
    if (!checkId) return Error.naoEncontradoError;
  }
  const cliente = await ClientesModel.getByEmail(email);
  let emailUnico = false;
  if (metodo === 'create') {
    emailUnico = cliente.length === 0;
  } else if (id === cliente[0].id) {
    emailUnico = true;
  };
  const dataRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  switch (false) {
    case (nome):
      return Error.nomeError;
    case (validaCpf(cpf.toString())):
      return Error.cpfError;
    case (dataRegex.test(dataNasc)):
      return Error.dataNascError;
    case (emailUnico):
      return Error.emailUnicoError;
    case (emailRegex.test(email)):
      return Error.emailError;
    case (rua):
      return Error.ruaError;
    case (cidade):
      return Error.cidadeError;
    case (bairro):
      return Error.bairroError;
    case (estado):
      return Error.estadoError;
    case (pais):
      return Error.paisError;
    case (cep):
      return Error.cepError;
    case (numero):
      return Error.cepError;
    default:
      return false;
  };
};

const create = async (cliente) => {
  const {
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
  } = cliente;
  const notValid = await validate('create', cliente);
  if (notValid) return notValid;

  const id = await ClientesModel.create(cliente);
  if (id) return {
    id,
    nome,
    email,
    cpf,
    dataNasc,
    endereco: {
      rua,
      bairro,
      cidade,
      estado,
      pais,
      cep,
      numero,
    },
  };

  return {
    path: 'create',
    message: 'erro ao criar cliente no banco de dados',
  };
};

const getById = async (id) => {
  const cliente = await ClientesModel.getById(id);

  if (cliente) return cliente;

  return Error.naoEncontradoError;
}

const updateById = async (id, cliente) => {
  const {
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
  } = cliente;
  const notValid = await validate('update', cliente, id);
  if (notValid) return notValid;

  await ClientesModel.updateById(id, cliente);

  return {
    id,
    nome,
    email,
    cpf,
    dataNasc,
    endereco: {
      rua,
      bairro,
      cidade,
      estado,
      pais,
      cep,
      numero,
    },
  };
};

const deleteById = async (id) => {
  await ClientesModel.deleteById(id);
};

export default {
  create,
  updateById,
  deleteById,
  getById,
};
