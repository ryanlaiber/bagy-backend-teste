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
  await db.run(
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
};

const getByEmail = async (email) => {
  const db = await openDb();
  const clientes = await db.all(
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

  return clientes;
};

const getById = async (id) => {
  const db = await openDb();
  const cliente = await db.get(
    `SELECT * FROM clientes
    WHERE id = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model clientes getById',
        message: err,
      };
    }
  );

  return cliente;
};

const updateById = async (
  id,
  {
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
  }
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
        path: 'model clientes updateById',
        message: err,
      };
    }
  );
};

const deleteById = async (id) => {
  const db = await openDb();
  await db.run(
    `DELETE FROM clientes
    WHERE id = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model clientes deleteById',
        message: err,
      };
    }
  );
};

export default {
  create,
  getByEmail,
  updateById,
  getById,
  deleteById,
};
