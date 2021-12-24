const db = require('./connection');

const create = ({
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
  db.run(
    `INSERT INTO clientes (nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero)
    VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
    [nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero],
    (err) => {
      if (err) return {
        path: 'model clientes create',
        message: err.message,
      };
      return true;
    }
  );
};

const getByEmail = (email) => {
  db.run(
    `SELECT * FROM clientes
    WHERE email = ?`,
    email,
    (err, rows) => {
      if (err) return {
        path: 'model clientes getByEmail',
        message: err.message,
      };

      return rows;
    }
  );
};

create('nome1', 'teste1@email.com', 15442311723, '27/10/1888', 'rua teste', 'bairro teste', 'cidade teste', 'es', 'br', 29280000, 'N/A');

module.exports = {
  create,
  getByEmail,
};
