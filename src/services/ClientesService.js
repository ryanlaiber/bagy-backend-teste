import ClientesModel from '../models/ClientesModel';
import mocs from '../../mocs';
import Error from '../errors/clientesErrors';
import validaCpf from '../helpers/cpfValidate';

const validate  = async ({
  nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero,
}) => {
  const cliente = await ClientesModel.getByEmail(email);
  const emailUnico = cliente.length === 0;
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
  const isValid = await validate(cliente);
  if (isValid) return isValid;

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

const main = async () => {
  const result = await getById(5);
  console.log(result);
}

main();
