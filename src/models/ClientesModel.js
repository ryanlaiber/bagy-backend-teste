import { openDb } from '../dataBase/dbConfig';

const create = async ({
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
  const db = await openDb();
  const novoCliente = await db.run(
    `INSERT INTO clientes (nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero)
    VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
    [nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero],
    (err) => {
      if (err) return {
        path: 'model clientes create',
        message: err,
      };
    }
  );

  console.log(novoCliente);
};

const getByEmail = async (email) => {
  const db = await openDb();
  const cliente = await db.run(
    `SELECT * FROM clientes
    WHERE email = ?`,
    [email],
    (err) => {
      if (err) return {
        path: 'model clientes getByEmail',
        message: err,
      };
    }
  );
  console.log(cliente);
  return cliente;
};

const updateById = async (
  id,
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
) => {
  const db = await openDb();
  await db.run(
    `UPDATE clientes
    SET
    nome = ?,
    email = ?,
    cpf = ?,
    dataNasc = ?,
    rua = ?,
    bairro = ?,
    cidade = ?,
    estado = ?,
    pais = ?,
    cep = ?,
    numero = ?
    WHERE id = ?`,
    [nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero, id],
    (err) => {
      if (err) return {
        path: 'model clientes getByEmail',
        message: err,
      };
    }
  );
};

const exCliente = {
nome: 'nome1', 
email: 'teste1@email.com', 
cpf: '15442311723', 
dataNasc: '27/10/1888', 
rua: 'rua teste', 
bairro: 'bairro teste', 
cidade: 'cidade teste', 
estado: 'es', 
pais: 'br', 
cep: 29280000, 
numero: 'N/A'
};
getByEmail('teste1@email.com');
module.exports = {
  create,
  getByEmail,
  updateById,
};
