import { openDb } from '../dataBase/dbConfig';
import mocs from '../../mocs';

const create = async ({
  nome,
  imagem,
  descricao,
  peso,
  preco,
  estoque
}) => {
  const db = await openDb();
  await db.run(
    `INSERT INTO produtos (nome, imagem, descricao, peso, preco, estoque)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [nome, imagem, descricao, peso, preco, estoque],
    (err) => {
      if (err) return {
        path: 'model produtos create',
        message: err,
      };
    }
  );
};

const updateById = async (
  id,
  {
    nome,
    imagem,
    descricao,
    peso,
    preco,
    estoque,
  }
) => {
  const db = await openDb();
  await db.run(
    `UPDATE produtos
    SET
    nome = ?,
    imagem = ?,
    descricao = ?,
    peso = ?,
    preco = ?,
    estoque = ?
    WHERE id = ?`,
    [nome, imagem, descricao, peso, preco, estoque, id],
    (err) => {
      if (err) return {
        path: 'model produtos updateById',
        message: err,
      };
    }
  );
};

const deleteById = async (id) => {
  const db = await openDb();
  await db.run(
    `DELETE FROM produtos
    WHERE id = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model produtos deleteById',
        message: err,
      };
    }
  );
}

const getById = async (id) => {
  const db = await openDb();
  const produto = await db.get(
    `SELECT * FROM produtos
    WHERE id = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model produtos getById',
        message: err,
      };
    }
  );

  return produto;
}

export default {
  create,
  updateById,
  deleteById,
  getById,
};
