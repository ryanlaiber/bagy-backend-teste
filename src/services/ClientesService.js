import ClientesModel from '../models/ClientesModel';
import mocs from '../../mocs';
import Error from '../errors/clientesErrors';
import validaCpf from '../helpers/cpfValidate';

const validate  = ({
  nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero,
}) => {
  const dataRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  switch (false) {
    case (nome):
      return Error.nomeError;
    case (validaCpf(cpf.toString())):
      return Error.cpfError;
    case (dataRegex.test(dataNasc)):
      return Error.dataNascError;
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

console.log(validate(mocs.exCliente));
