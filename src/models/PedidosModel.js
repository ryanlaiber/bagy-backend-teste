import { openDb } from '../dataBase/dbConfig';

const create = async ({
  parcelas,
  compradorId,
  status,
}) => {
  const db = await openDb();
  const { lastID } = await db.run(
    `INSERT INTO pedidos (parcelas, compradorId, status)
    VALUES (?, ?, ?)`,
    [parcelas, compradorId, status],
    (err) => {
      if (err) return {
        path: 'model pedidos create',
        message: err,
      };
    }
  );
  return lastID;
};

const deleteById = async (id) => {
  const db = await openDb();
  await db.run(
    `DELETE FROM pedidos
    WHERE id = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model pedidos delete',
        message: err,
      };
    }
  );
};

const updateById  = async (id, { parcelas, compradorId, status }) => {
  const db = await openDb();
  await db.run(
    `UPDATE pedidos
    SET
    parcelas = ?,
    compradorId = ?,
    status = ?
    WHERE id = ?`,
    [parcelas, compradorId, status, id],
    (err) => {
      if (err) return {
        path: 'model pedidos updateById',
        message: err,
      };
    }
  );
};

const getById = async (id) => {
  const db = await openDb();
  const pedido = await db.get(
    `SELECT * FROM pedidos
    WHERE id = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model pedidos getById',
        message: err,
      };
    }
  );

  return pedido;
}

const getByCompradorId = async (compradorId) => {
  const db = await openDb();
  const pedidos = await db.all(
    `SELECT * FROM pedidos
    WHERE compradorId = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model pedidos getByCompradorId',
        message: err,
      };
    }
  );

  return pedidos;
};

export default {
  create,
  deleteById,
  updateById,
  getById,
  getByCompradorId,
};